import React, { useContext, useEffect, useState } from "react";
import { format, subDays } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faFilter,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { AuthContext } from "@/contexts/AuthContext";
import { fetchPessoas, deletarPessoa } from "@/services/api";
import DeleteConfirmationModal from "@/components/modals/DeleteConfirmationModal";
import { Botao } from "@/components/buttons/Botao";

interface Pessoa {
  id_pessoa: string;
  nome: string;
  cpf: string;
  email: string;
  dataNascimento: string;
}

const Tabela = () => {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 11;
  const paginaInicial = (paginaAtual - 1) * itensPorPagina;
  const paginaFinal = paginaInicial + itensPorPagina;
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [pessoaId, setPessoaId] = useState<string | undefined>(undefined);
  const { usuario_id } = useContext(AuthContext);
  const [dados, setDados] = useState<Pessoa[]>([]);
  const [filtroNome, setFiltroNome] = useState("");
  const [filtroEmail, setFiltroEmail] = useState("");
  const [filtroCPF, setFiltroCPF] = useState("");
  const [filtroDataNascimento, setFiltroDataNascimento] = useState("");

  useEffect(() => {
    fetchPessoas().then((data) => {
      if (data !== undefined && data !== null) {
        setDados(data.reverse());
      }
    });
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

  const handleRemovePessoa = (id: string | undefined) => {
    setPessoaId(id);
    setShowModal(true);
  };

  const handleDeletePessoa = () => {
    if (pessoaId) {
      deletarPessoa(pessoaId, usuario_id)
        .then(() => {
          // Atualiza a lista de pessoas após a exclusão
          fetchPessoas().then((data) => {
            if (data !== undefined && data !== null) {
              setDados(data.reverse());
            }
          });
        })
        .catch((error) => {
          console.error("Erro ao deletar pessoa: " + error);
        });
    }
    setShowModal(false);
  };

  // Filtrar os dados com base nos campos de pesquisa
  const dadosFiltrados = dados.filter(
    (pessoa) =>
      pessoa.nome?.toLowerCase().includes(filtroNome.toLowerCase()) &&
      pessoa.email?.toLowerCase().includes(filtroEmail.toLowerCase()) &&
      pessoa.cpf?.toLowerCase().includes(filtroCPF.toLowerCase()) &&
      pessoa.dataNascimento?.includes(filtroDataNascimento)
  );

  // Filtrar os dados com base na página atual
  const dadosPagina = dadosFiltrados.slice(paginaInicial, paginaFinal);
  const totalPaginas = Math.ceil(dadosFiltrados.length / itensPorPagina);

  const handleVerDetalhes = (id: string) => {
    router.push(`/pessoas/${id}`);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col justify-center items-center">
      <div className="flex justify-end mb-4">
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Nome"
            value={filtroNome}
            onChange={(e) => setFiltroNome(e.target.value)}
            className="px-2 py-1 border rounded"
          />
          <input
            type="text"
            placeholder="Email"
            value={filtroEmail}
            onChange={(e) => setFiltroEmail(e.target.value)}
            className="px-2 py-1 border rounded"
          />
          <input
            type="text"
            placeholder="CPF"
            value={filtroCPF}
            onChange={(e) => setFiltroCPF(e.target.value)}
            className="px-2 py-1 border rounded"
          />
          <input
            type="text"
            placeholder="Data de Nascimento"
            value={filtroDataNascimento}
            onChange={(e) => setFiltroDataNascimento(e.target.value)}
            className="px-2 py-1 border rounded"
          />
          <Botao
            className="px-4 py-2 text-sm bg-lightGreen text-white rounded disabled:opacity-50 hover:bg-off-white hover:text-lightGreen"
            onClick={() => {
              setPaginaAtual(1);
            }}
          >
            <FontAwesomeIcon icon={faFilter} />
            Filtrar
          </Botao>
        </div>
      </div>
      <table className="min-w-full bg-white rounded-md">
        <thead className="rounded-md">
          <tr className="text-off-white bg-lightGreen rounded-md">
            <th className="px-4 py-2">Nome</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">CPF</th>
            <th className="px-4 py-2">Data de Nascimento</th>
            <th className="px-4 py-2">Operações</th>
          </tr>
        </thead>
        <tbody>
          {dadosPagina.map((pessoa, index) => (
            <tr
              key={pessoa.id_pessoa}
              className={index % 2 !== 0 ? "bg-lightGreen" : ""}
            >
              <td className="px-4 py-2">{pessoa.nome}</td>
              <td className="px-4 py-2">{pessoa.email}</td>
              <td className="px-4 py-2">{pessoa.cpf}</td>
              <td className="px-4 py-2">{pessoa.dataNascimento}</td>
              <td className="flex justify-around px-4 py-2">
                <FontAwesomeIcon
                  className="cursor-pointer"
                  title="Visualização detalhada"
                  onClick={() => handleVerDetalhes(pessoa.id_pessoa)}
                  icon={faEye}
                />
                <FontAwesomeIcon
                  className="cursor-pointer"
                  title="Editar dados"
                  onClick={() => handleRemovePessoa(pessoa.id_pessoa)}
                  icon={faPenToSquare}
                />
                <FontAwesomeIcon
                  className="cursor-pointer"
                  title="Remover pessoa"
                  onClick={() => handleRemovePessoa(pessoa.id_pessoa)}
                  icon={faTrash}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <DeleteConfirmationModal
        onDelete={handleDeletePessoa}
        isOpen={showModal}
        closeModal={() => setShowModal(false)}
      />

      <div className="flex justify-end mt-4">
        <Botao
          className="px-4 py-2 mr-2 text-sm bg-lightGreen text-white rounded disabled:opacity-50 hover:bg-off-white hover:text-lightGreen"
          onClick={handlePaginaAnterior}
          disabled={paginaAtual === 1}
        >
          Anterior
        </Botao>
        <div className="p-2">
          <p>
            Página {paginaAtual} de {totalPaginas}
          </p>
        </div>
        <Botao
          className="px-4 py-2 text-sm bg-lightGreen text-white rounded disabled:opacity-50 hover:bg-off-white hover:text-lightGreen"
          onClick={handleProximaPagina}
          disabled={paginaAtual === totalPaginas}
        >
          Próxima
        </Botao>
      </div>
    </div>
  );
};

export default Tabela;
