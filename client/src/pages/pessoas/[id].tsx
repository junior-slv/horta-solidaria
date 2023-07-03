import Router, { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { fetchPessoaById } from "@/services/api";
import { AuthContext } from "@/contexts/AuthContext";
import Sidebar from "@/components/sidebar/Sidebar";
import { Botao } from "@/components/buttons/Botao";

interface Endereco {
  rua: string;
  numero: string;
  bairro: string;
  complemento: string;
  cidade: string;
  pais: string;
  cep: string;
  estado: string;
}

interface Telefone {
  telefone: string;
}

interface EstadoCivil {
  estadoCivil: string;
}

interface Genero {
  genero: string;
}

interface Etnia {
  etnia: string;
}
interface Objetivo {
  objetivo: string;
}
interface Hortum {
  nome: string;
}

interface Pessoa {
  id_pessoa: string;
  nome: string;
  email: string;
  cpf: string;
  dataNascimento: string;
  dependentes: number;
  rendaFamiliar: string;
  comercializar: string;
  capacitacao: string;
  objetivo: string;
  createdAt: string;
  updatedAt: string;
  Endereco: Endereco;
  Telefone: Telefone;
  Estado_Civil: EstadoCivil;
  Genero: Genero;
  Etnium: Etnia;
  Objetivo: Objetivo;
  Hortum: Hortum;
}

const PessoaDetalhes = () => {
  const router = useRouter();
  const { id } = router.query;
  const [pessoa, setPessoa] = useState<Pessoa | null>(null);
  const { usuario_id, isAuth } = useContext(AuthContext);

  useEffect(() => {
    if (!isAuth) {
      Router.push("/");
    } else {
      if (id) {
        if (usuario_id !== null) {
          fetchPessoaById(String(id), usuario_id) // Passe o usuario_id como argumento
            .then((data: Pessoa | null) => setPessoa(data))
            .catch((error: any) => {
              console.error("Erro ao obter os detalhes da pessoa:", error);
            });
        } else {
          console.error("usuario_id é null");
        }
      }
    }
  }, [id, usuario_id]);

  if (!pessoa) {
    return <div>Carregando...</div>;
  }

  // Função para converter o formato da data
  const formatarData = (data: string) => {
    const dateObj = new Date(data);
    const dia = dateObj.getDate();
    const mes = dateObj.getMonth() + 1; // Os meses começam em 0, então adicionamos 1
    const ano = dateObj.getFullYear();
    const horas = dateObj.getHours();
    const minutos = dateObj.getMinutes();
    const segundos = dateObj.getSeconds();
    return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full flex items-center justify-center">
        <div className="flex flex-col">
          <div className="flex justify-center bg-lightGreen bg-opacity-50">
            <h1>{pessoa.nome}</h1>
          </div>
          <div className="flex">
            <div className="p-4">
              <div>
                <p>CPF: {pessoa.cpf}</p>
              </div>

              <div>
                <p>Telefone: {pessoa.Telefone?.telefone}</p>
              </div>
              <div>
                <p>Data de Nascimento: {pessoa.dataNascimento}</p>
              </div>
              <div>
                <p>Dependetes: {pessoa.dependentes}</p>
              </div>
              <div>
                <p>Renda Familiar: {pessoa.rendaFamiliar} </p>
              </div>
              <div>
                <p>Experiência em horticultura: {pessoa.capacitacao}</p>
              </div>
            </div>
            <span className="p-4">
              <div>
                <p>Gênero: {pessoa.Genero?.genero}</p>
              </div>
              <div>
                <p>Etnia: {pessoa.Etnium?.etnia}</p>
              </div>
              <div>
                <p>
                  Endereço:{" "}
                  {`${pessoa.Endereco.rua}, ${pessoa.Endereco.numero}, ${pessoa.Endereco.bairro} - ${pessoa.Endereco.cidade}, ${pessoa.Endereco.estado}, ${pessoa.Endereco.cep}`}
                </p>
              </div>
              <div>
                <p>Membro da horta: {pessoa.Hortum.nome}</p>
              </div>
              <div>
                <p>Local de comercialização: {pessoa.comercializar} </p>
              </div>
              <div>
                <p>Objetivo: {pessoa.Objetivo.objetivo}</p>
              </div>
            </span>
          </div>

          <Botao className="bg-lightGreen">Gerar PDF da ficha</Botao>
          <p>Criado em: {formatarData(pessoa.createdAt)}</p>
          <p>Atualizado em: {formatarData(pessoa.updatedAt)}</p>
          <div>
            <p>Identificação unica: {pessoa.id_pessoa}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PessoaDetalhes;
