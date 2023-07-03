import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { deletarPessoa } from "@/services/api";

interface Pessoa {
  id_pessoa: string;
  nome: string;
  cpf: string;
  email: string;
  dataNascimento: string;
}

interface TabelaProps {
  dados: Pessoa[];
}

const Tabela: React.FC<TabelaProps> = ({ dados }) => {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 11;
  const paginaInicial = (paginaAtual - 1) * itensPorPagina;
  const paginaFinal = paginaInicial + itensPorPagina;
  const totalPaginas = Math.ceil((dados ?? []).length / itensPorPagina);
  const router = useRouter();

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

  const handleRemovePessoa = async (id: string | undefined) => {
    await deletarPessoa(id);
  };

  const handleVerDetalhes = (id: string) => {
    router.push(`/pessoas/${id}`);
  };

  // Filtrar os dados com base na página atual
  const dadosPagina = (dados ?? []).slice(paginaInicial, paginaFinal);


  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white rounded-lg">
        <thead >
          <tr className="bg-opacity-80 bg-lightGreen">
            <th className="px-4 py-2">Nome</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">CPF</th>
            <th className="px-4 py-2">Data de Nascimento</th>
            <th className="px-4 py-2">Operações</th>
          </tr>
        </thead>
        <tbody>
          {dadosPagina.map((pessoa) => (
            <tr key={pessoa.id_pessoa}>
              <td className="px-4 py-2">{pessoa.nome}</td>
              <td className="px-4 py-2">{pessoa.email}</td>
              <td className="px-4 py-2">{pessoa.cpf}</td>
              <td className="px-4 py-2">{pessoa.dataNascimento}</td>
              <td className="px-4 py-2">
                <FontAwesomeIcon
                  className="cursor-pointer"
                  onClick={() => handleVerDetalhes(pessoa.id_pessoa)}
                  icon={faEye}
                />
                <FontAwesomeIcon
                  className="cursor-pointer"
                  onClick={() => handleRemovePessoa(pessoa.id_pessoa)}
                  icon={faPenToSquare}
                />
                <FontAwesomeIcon
                  className="cursor-pointer"
                  onClick={() => handleRemovePessoa(pessoa.id_pessoa)}
                  icon={faTrash}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end mt-4">
        <button
          className="px-4 py-2 mr-2 text-sm bg-blue-500 text-white rounded disabled:opacity-50 hover:bg-lightGreen"
          onClick={handlePaginaAnterior}
          disabled={paginaAtual === 1}
        >
          Anterior
        </button>
        <button
          className="px-4 py-2 text-sm bg-blue-500 text-white rounded disabled:opacity-50 hover:bg-lightGreen"
          onClick={handleProximaPagina}
          disabled={paginaAtual === totalPaginas}
        >
          Próxima
        </button>
      </div>
    </div>
  );
};

export default Tabela;
