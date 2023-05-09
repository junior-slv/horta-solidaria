import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { deletarDoacao, fetchDoacoes } from "@/services/api";
import Router from "next/router";

// Interface para a estrutura dos dados da tabela
interface Tabela {
  id: number;
  doador: string;
  produto: string;
  quantidade: string;
  data: string;
}

function Tabela() {
  const { isAuth } = useContext(AuthContext);
  const [dados, setDados] = useState<Tabela[]>([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 4;
  const paginaInicial = (paginaAtual - 1) * itensPorPagina;
  const paginaFinal = paginaInicial + itensPorPagina;
  const totalPaginas = Math.ceil(dados.length / itensPorPagina);

  useEffect(() => {
    // Verifica se o usuário está autenticado
    if (!isAuth) {
      Router.push("/");
    } else {
      // Carrega os dados das doações
      fetchDoacoes().then((data) => setDados(data));
    }
  }, []);

  const handlePaginaAnterior = () => {
    // Atualiza a página atual para exibir a página anterior
    if (paginaAtual > 1) {
      setPaginaAtual(paginaAtual - 1);
    }
  };

  const handleProximaPagina = () => {
    // Atualiza a página atual para exibir a próxima página
    if (paginaAtual < totalPaginas) {
      setPaginaAtual(paginaAtual + 1);
    }
  };

  const handleRemoveDoacao = async (id: number | undefined) => {
    // Remove uma doação pelo ID
    await deletarDoacao(id);
    // Recarrega os dados das doações após a remoção
    const updatedData = await fetchDoacoes();
    setDados(updatedData); // Atualiza os dados da tabela com os novos dados
  };
  
  return (
    <div className="rounded-lg mt-[40px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-white">
      {/* Tabela */}
      <table className="w-full">
        {/* Cabeçalho Tabela */}
        <thead className="bg-lightGray w-full">
          <tr className="h-[50px] rounded-lg">
            <th>
              <input type="checkbox" className="scale-x-150 scale-y-150" />
            </th>
            <th>
              Doador{" "}
              <span className="ml-[10px]">
                <FontAwesomeIcon icon={faArrowDown} />
              </span>
            </th>
            <th>
              Produto{" "}
              <span className="ml-[10px]">
                <FontAwesomeIcon icon={faArrowDown} />
              </span>
            </th>
            <th>
              Quantidade{" "}
              <span className="ml-[10px]">
                <FontAwesomeIcon icon={faArrowDown} />
              </span>
            </th>
            <th>
              Data{" "}
              <span className="ml-[10px]">
                <FontAwesomeIcon icon={faArrowDown} />
              </span>
            </th>
            <th>
              Edição{" "}
              <span className="ml-[10px]">
                <FontAwesomeIcon icon={faArrowDown} />
              </span>
            </th>
          </tr>
        </thead>
        {/* Fim cabeçalho */}
        <tbody>
          {/* Renderiza as linhas da tabela */}
          {dados.slice(paginaInicial, paginaFinal).map((item) => (
            <tr key={item.id}>
              <td className="py-[20px]">
                <input type="checkbox" className="scale-x-150 scale-y-150" />
              </td>
              <td>{item.doador} </td>
              <td>{item.produto} </td>
              <td>{item.quantidade} </td>
              <td>{item.data} </td>
              <td>
                <FontAwesomeIcon
                  icon={faTrash}
                  className="mr-[20px] cursor-pointer"
                  onClick={() => handleRemoveDoacao(item.id)}
                />{" "}
                <FontAwesomeIcon icon={faPenToSquare} />
              </td>
            </tr>
          ))}
        </tbody>
        {/* Rodapé da tabela */}
        <tfoot className="bg-lightGray w-full h-[50px]">
          <tr>
            <td></td>
            <td>
              {/* Botão para ir para a página anterior */}
              <button
                className="py-1.5 px-1.5 font-medium outline-black hover:text-sm"
                onClick={handlePaginaAnterior}
                disabled={paginaAtual === 1}
              >
                &lt; Anterior
              </button>
            </td>
            <td></td>
            <td>
              <p>
                Página {paginaAtual} de {totalPaginas}
              </p>
            </td>
            <td></td>
            <td>
              {/* Botão para ir para a próxima página */}
              <button
                className="py-1.5 px-1.5 font-medium outline-black hover:text-sm"
                onClick={handleProximaPagina}
                disabled={paginaAtual === totalPaginas}
              >
                Próxima &gt;
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Tabela;
