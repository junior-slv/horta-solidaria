import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { deletarPessoa, fetchPessoas, fetchUsuarios } from "@/services/api";
import Router from "next/router";

interface Usuario {
    id: number;
    login: string;
    senha: string;
    cargo_id: number;
    createdAt: string;
    updatedAt: string;
    Pessoa: {
      nome: string;
      cpf: string;
      Telefone: {
        telefone: string;
      };
    };
  }
  

function TabelaUsuarios() {
  const { isAuth } = useContext(AuthContext);
  const [dados, setDados] = useState<Usuario[]>([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 10;
  const paginaInicial = (paginaAtual - 1) * itensPorPagina;
  const paginaFinal = paginaInicial + itensPorPagina;
  const totalPaginas = Math.ceil(dados.length / itensPorPagina);
  const [todosSelecionados, setTodosSelecionados] = useState(false);

  useEffect(() => {
    if (!isAuth) {
      Router.push("/");
    } else {
      fetchUsuarios().then((data) => {
        setDados(data.reverse());
      });
    }
  }, []);

  const handlePaginaAnterior = () => {
    if (paginaAtual > 1) {
      setPaginaAtual(paginaAtual - 1);
    }
  };

  const handleProximaPagina = () => {
    if (paginaAtual < totalPaginas) {
      setPaginaAtual(paginaAtual + 1);
    }
  };


  return (
    <div className="mt-[40px] shadow-md bg-white">
      {/* Tabela */}
      <div className="w-[55rem] flex flex-col">
        {/* Cabeçalho Tabela */}
        <div className="bg-lightGray w-full font-bold grid grid-cols-6 h-[50px] rounded-t-lg">
          <div className="flex items-center justify-center">
            Login{" "}
            <span className="">
              <FontAwesomeIcon icon={faArrowDown} />
            </span>
          </div>
          <div className="flex items-center justify-center">
            Nome{" "}
            <span className="">
              <FontAwesomeIcon icon={faArrowDown} />
            </span>
          </div>
          <div className="flex items-center justify-center">
            CPF{" "}
            <span className="">
              <FontAwesomeIcon icon={faArrowDown} />
            </span>
          </div>
          <div className="flex items-center justify-center">
            Telefone{" "}
            <span className="">
              <FontAwesomeIcon icon={faArrowDown} />
            </span>
          </div>
          <div className="flex items-center justify-center">Ações</div>
        </div>
        {/* Fim cabeçalho */}
        {/* Renderiza as linhas da tabela */}
        {dados.slice(paginaInicial, paginaFinal).map((usuario, index) => (
          <div
            className={`grid grid-cols-6 ${
              index % 2 === 0 ? "bg-white" : "bg-lightGreen"
            }`}
            key={usuario.id}
          >
            <div className="flex items-center ml-5">
              <span>{usuario.login}</span>
            </div>
            <div className="flex items-center justify-center">{usuario.Pessoa.nome}</div>
            <div className="flex items-center justify-center">{usuario.Pessoa.cpf}</div>
            <div className="flex items-center justify-center">{usuario.Pessoa.Telefone.telefone}</div>
            <div className="flex items-center justify-center">
              <FontAwesomeIcon
                className="mr-[20px] cursor-pointer"
                icon={faEye}
              />
              <FontAwesomeIcon
                icon={faTrash}
                className="mr-[20px] cursor-pointer"
                // onClick={() => handleRemovePessoa(usuario.id)}
              />
              <FontAwesomeIcon icon={faPenToSquare} />
            </div>
          </div>
        ))}
        {/* Rodapé da tabela */}
        <div className="bg-lightGray grid grid-cols-3 justify-around rounded-b-lg">
          <div className="flex items-center justify-center">
            <button
              className="relative py-1.5 px-1.5 cursor-pointer font-medium outline-black hover:text-lightGreen"
              onClick={handlePaginaAnterior}
              disabled={paginaAtual === 1}
            >
              &lt; Anterior
            </button>
          </div>
          <div className="flex items-center justify-center">
            <p>
              Página {paginaAtual} de {totalPaginas}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="py-1.5 px-1.5 cursor-pointer font-medium outline-black hover:text-lightGreen"
              onClick={handleProximaPagina}
              disabled={paginaAtual === totalPaginas}
            >
              Próxima &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabelaUsuarios;
