import Router, { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { fetchPessoaById } from "@/services/api";
import { AuthContext } from "@/contexts/AuthContext";
import Sidebar from "@/components/sidebar/Sidebar";
import { Botao } from "@/components/buttons/Botao";
import CamposFicha from "@/components/formulario/CamposFicha";
import CampoFichaIcone from "@/components/formulario/CampoFichaIcone";
import {
  faArrowLeftRotate,
  faArrowsRotate,
  faBookOpen,
  faCake,
  faCakeCandles,
  faCalendar,
  faCodeFork,
  faEarth,
  faFileArchive,
  faGenderless,
  faHandsHelping,
  faHouse,
  faIcons,
  faIdCard,
  faMailBulk,
  faMoneyBillWave,
  faPerson,
  faPhone,
  faTent,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

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
    return (
      <div className="flex">
        <Sidebar />
        <div className="w-full flex items-center justify-center">
          <h1>Carregando...</h1>
        </div>
      </div>
    );
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
      <div className="w-full flex items-center justify-center bg-beige">
        <div className="flex flex-col bg-white rounded-md">
          <CamposFicha conteudo={pessoa.nome} />
          <div className="flex flex-col">
            <div className="p-4">
              <div className="flex justify-start">
                <CampoFichaIcone conteudo={pessoa.email} icon={faMailBulk} />
                <CampoFichaIcone conteudo={pessoa.cpf} icon={faIdCard} />
                <CampoFichaIcone
                  conteudo={pessoa.Telefone?.telefone}
                  icon={faPhone}
                />
                <CampoFichaIcone
                  conteudo={pessoa.dataNascimento}
                  icon={faCakeCandles}
                />
                <CampoFichaIcone
                  conteudo={pessoa.dependentes.toString()}
                  icon={faPerson}
                />
              </div>
              <div className="flex justify-between">
                <CampoFichaIcone
                  conteudo={pessoa.Genero.genero}
                  icon={faGenderless}
                />
                <CampoFichaIcone
                  conteudo={pessoa.Etnium.etnia}
                  icon={faEarth}
                />
                <CampoFichaIcone
                  conteudo={pessoa.rendaFamiliar}
                  icon={faMoneyBillWave}
                />
              </div>
              <CampoFichaIcone
                icon={faHouse}
                conteudo={`${pessoa.Endereco.rua}, ${pessoa.Endereco.numero}, ${
                  pessoa.Endereco.bairro
                }${
                  pessoa.Endereco.complemento === ""
                    ? ""
                    : `, ${pessoa.Endereco.complemento}`
                }, ${pessoa.Endereco.cidade} - ${pessoa.Endereco.estado}, ${
                  pessoa.Endereco.cep
                }, ${pessoa.Endereco.pais}`}
              />
              <div className="flex">
                <CampoFichaIcone
                  icon={faCodeFork}
                  conteudo={pessoa.Hortum.nome}
                />
                <CampoFichaIcone
                  icon={faBookOpen}
                  conteudo={
                    pessoa.capacitacao === "Sim"
                      ? "Possuí capacitação"
                      : "Não possui capacitação"
                  }
                />
                <CampoFichaIcone
                  icon={faTent}
                  conteudo={pessoa.comercializar}
                />
                <CampoFichaIcone
                  icon={faHandsHelping}
                  conteudo={pessoa.Objetivo.objetivo}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-around">
            <CampoFichaIcone
              conteudo={`Criado em: ${formatarData(pessoa.createdAt)}`}
              icon={faCalendar}
            />
            <CampoFichaIcone
              conteudo={`Atualizado em: ${formatarData(pessoa.updatedAt)}`}
              icon={faArrowsRotate}
            />
          </div>
          <CampoFichaIcone
            className="flex justify-center items-center"
            conteudo={`Identificação única: ${pessoa.id_pessoa}`}
            icon={faFileArchive}
          />
          <div className="flex items-center justify-center p-2">
            <Botao className="bg-lightGreen">Gerar PDF da ficha</Botao>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PessoaDetalhes;
