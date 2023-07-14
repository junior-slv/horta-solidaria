import React, { useState, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faX,
  faCheck,
  faMailBulk,
  faIdCard,
  faCalendar,
  faPerson,
  faMoneyBills,
  faPhone,
  faPhoneSquare,
  faEarth,
  faArchive,
  faGenderless,
  faCodeFork,
  faMagnifyingGlassDollar,
  faArrowAltCircleDown,
  faBookmark,
  faHourglass,
  faMagnifyingGlass,
  faSearch,
  faCaretDown,
  faHand,
  faMoneyCheck,
  faMoneyBill,
  faMoneyCheckDollar,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "@/components/sidebar/Sidebar";
import { Botao } from "../../components/buttons/Botao";
import FormInput from "@/components/inputs/FormInput";
import { AuthContext } from "@/contexts/AuthContext";
import { z } from "zod";
import Toast from "@/components/toast/Toast";
import { fetchHortas } from "@/services/api/apiHorta";
import { fetchObjetivos } from "@/services/api/apiObjetivo";
import { addPessoa, getByCep } from "@/services/api";
import LoadingAnimation from "@/components/loadings/LoadingAnimation";
import FormRow from "@/components/FormRow";
import Router from "next/router";
import InputFormulario from "@/components/formulario/InputFormulario";
import SelectFormulario from "@/components/formulario/SelectFormulario";

// Definindo o esquema de validação com Zod
const schema = z.object({
  nome: z.string().nonempty(),
  email: z.string().email(),
  cpf: z.string().length(14),
  dataNascimento: z.string().nonempty(),
  genero: z.string().nonempty(),
  estadoCivil: z.string().nonempty(),
  etnia: z.string().nonempty(),
  rua: z.string().nonempty(),
  numero: z.string().nonempty(),
  bairro: z.string().nonempty(),
  complemento: z.string(),
  cidade: z.string().nonempty(),
  pais: z.string().nonempty(),
  estado: z.string().nonempty(),
  telefone: z.string().nonempty(),
  telefonerecado: z.string(),
  cep: z.string().nonempty(),
  selectedHorta: z.string().nonempty(),
  selectedObjetivo: z.string().nonempty(),
  dependentes: z.string().nonempty(),
  rendaFamiliar: z.string().nonempty(),
  capacitacao: z.string().nonempty(),
  comercializar: z.string().nonempty(),
});
interface Horta {
  nome: string;
}
interface Objetivo {
  objetivo: string;
}

const FormularioPessoas: React.FC = () => {
  const { isAuth, usuario_id } = useContext(AuthContext);
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [dataNascimento, setDatanascimento] = useState<string>("");
  const [genero, setGenero] = useState<string>("");
  const [estadoCivil, setEstadoCivil] = useState<string>("");
  const [etnia, setEtnia] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [telefonerecado, setTelefoneRecado] = useState<string>("");
  //endereço
  const [rua, setRua] = useState<string>("");
  const [numero, setNumero] = useState<string>("");
  const [bairro, setBairro] = useState<string>("");
  const [complemento, setComplemento] = useState<string>("");
  const [cidade, setCidade] = useState<string>("");
  const [pais, setPais] = useState<string>("Brasil");
  const [estado, setEstado] = useState<string>("");
  const [cep, setCep] = useState<string>("");
  //

  const [selectedHorta, setSelectedHorta] = useState<string>("");
  const [selectedObjetivo, setSelectedObjetivo] = useState<string>("");
  const [dependentes, setDependentes] = useState<string>("");
  const [rendaFamiliar, setRendaFamiliar] = useState<string>("");
  const [capacitacao, setCapacitacao] = useState<string>("");
  const [comercializar, setComercializar] = useState<string>("");

  const [hortas, setHortas] = useState<Horta[]>([]);
  const [objetivos, setObjetivos] = useState<Objetivo[]>([]);

  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formError, setFormError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const optionsGenero: string[] = [
    "Homem",
    "Mulher",
    "Não binário",
    "Agênero",
    "Gênero fluído",
    "Transgênero",
  ];
  const optionsEstadoCivil: string[] = [
    "Solteiro(a)",
    "Casado(a)",
    "Divorciado(a)",
    "Separado(a)",
    "Viúvo(a)",
  ];
  const optionsRenda: string[] = [
    "Abaixo de um salário mínimo",
    "1 a 3 salários mínimos",
    "Acima de 3 salários mínimos",
  ];
  const optionsEtnia: string[] = [
    "Branco/Caucasiano",
    "Negro/Afrodescendente",
    "Pardo",
    "Latino/Hispano",
    "Asiático",
    "Indígena/Nativo",
    "Mestiço/Multiracial",
  ];

  const optionsComercializar: string[] = [
    "Na horta",
    "Em casa",
    "No bairro e proximidades",
    "Não pretende comercializar",
  ];

  const optionsCapacitacao: string[] = ["Sim", "Não"];

  const handleAddDonation = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setLoading(true);
      const formValues = {
        usuario_id,
        telefone,
        estadoCivil,
        genero,
        etnia,
        rua,
        numero,
        complemento,
        bairro,
        cidade,
        estado,
        pais,
        nome,
        email,
        cpf,
        cep,
        dataNascimento,
        dependentes,
        rendaFamiliar,
        capacitacao,
        comercializar,
        telefonerecado,
        selectedObjetivo,
        selectedHorta,
      };
      schema.parse(formValues);

      await addPessoa(
        usuario_id,
        telefone,
        estadoCivil,
        genero,
        etnia,
        rua,
        numero,
        complemento,
        bairro,
        cidade,
        estado,
        pais,
        nome,
        email,
        cpf,
        cep,
        dataNascimento,
        dependentes,
        rendaFamiliar,
        capacitacao,
        comercializar,
        telefonerecado,
        selectedObjetivo,
        selectedHorta
      );
      setFormSubmitted(true);
      setFormError(false);
      setNome("");
      setEmail("");
      setCpf("");
      setDatanascimento("");
      setGenero("");
      setEstadoCivil("");
      setEtnia("");
      setRua("");
      setNumero("");
      setBairro("");
      setComplemento("");
      setCidade("");
      setPais("Brasil");
      setEstado("");
      setCep("");
      setTelefone("");
      setTelefoneRecado("");
      setSelectedHorta("");
      setSelectedObjetivo("");
      setDependentes("");
      setRendaFamiliar("");
      setCapacitacao("");
      setComercializar("");
    } catch (err) {
      console.log("Error: ", err);
      setFormSubmitted(false);
      setFormError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleCompleteCep = () => {
    getByCep(cep).then((data) => {
      if (data) {
        setRua(data.logradouro);
        setBairro(data.bairro);
        setComplemento(data.complemento);
        setCidade(data.localidade);
        setEstado(data.uf);
      } else {
        // Handle the case when data is null or error occurred
      }
    });
  };

  useEffect(() => {
    fetchHortas().then((data) => {
      if (data !== undefined && data !== null) {
        setHortas(data);
      }
    });
    fetchObjetivos().then((data) => {
      if (data !== undefined && data !== null) {
        setObjetivos(data);
      }
    });
  }, []);

  // Verificar se o usuário está autenticado
  if (!isAuth) {
    // return null; // Ou pode exibir uma mensagem de carregamento ou redirecionar para a página de login diretamente
  }

  return (
      <div className="flex flex-col justify-between p-10 bg-beige">
        <div className="font-bold text-darkGreen flex justify-center items-center text-4xl p-4">
          <p>Cadastro de pessoa</p>
        </div>
        <div className="flex flex-col rounded-2xl">
          <div className=" flex-grow">
            <form
              id="formularioCadastro"
              className="flex flex-col min-w-full"
              onSubmit={handleAddDonation}
            >
              <div className="flex  flex-col bg-white">
                <div className="">
                  <div className="flex items-center uppercase font-bold justify-center bg-lightGreen text-white">
                    <p>Dados pessoais</p>
                  </div>
                  <div className="flex justify-start flex-col sm:flex-row">
                    <div className="p-2">
                      <InputFormulario
                        value={nome}
                        icon={faUser}
                        className="sm:w-[30rem]"
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Nome"
                      />
                    </div>

                    <div className="p-2">
                      <InputFormulario
                        value={email}
                        icon={faMailBulk}
                        className="sm:w-[30rem]"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-Mail"
                      />
                    </div>
                  </div>

                  <div className="flex justify-around flex-col sm:flex-row">
                    <div className="p-2">
                      <InputFormulario
                        value={cpf}
                        icon={faIdCard}
                        onChange={(e) => setCpf(e.target.value)}
                        placeholder="CPF"
                      />
                    </div>

                    <div className="p-2">
                      <InputFormulario
                        value={telefone}
                        icon={faPhone}
                        onChange={(e) => setTelefone(e.target.value)}
                        placeholder="Telefone"
                      />
                    </div>

                    <div className="p-2">
                      <InputFormulario
                        value={telefonerecado}
                        icon={faPhoneSquare}
                        onChange={(e) => setTelefoneRecado(e.target.value)}
                        placeholder="Telefone de recado"
                      />
                    </div>
                  </div>
                  <div className="flex justify-around flex-col sm:flex-row">
                    <div className="p-2">
                      <InputFormulario
                        value={dataNascimento}
                        icon={faCalendar}
                        type="date"
                        onChange={(e) => setDatanascimento(e.target.value)}
                        placeholder="Data de nascimento"
                      />
                    </div>

                    <div className="p-2">
                      <InputFormulario
                        value={dependentes}
                        icon={faPerson}
                        type="number"
                        onChange={(e) =>
                          setDependentes(e.target.value.toString())
                        }
                        placeholder="Dependentes"
                      />
                    </div>
                    <div className="p-2">
                    <SelectFormulario
                      placeholder="Etnia"
                      icon={faEarth}
                      options={optionsEtnia}
                      value={etnia}
                      onChange={(e) => setEtnia(e.target.value)}
                    />
                  </div>
                  </div>


                  <div className="flex justify-around flex-col sm:flex-row">
                    <div className="p-2">
                      <SelectFormulario
                        placeholder="Renda Familiar"
                        icon={faMoneyBills}
                        options={optionsRenda}
                        value={rendaFamiliar}
                        onChange={(e) => setRendaFamiliar(e.target.value)}
                      />
                    </div>

                    <div className="p-2">
                      <SelectFormulario
                        placeholder="Estado Civíl"
                        icon={faCaretDown}
                        options={optionsEstadoCivil}
                        value={estadoCivil}
                        onChange={(e) => setEstadoCivil(e.target.value)}
                      />
                    </div>

                    <div className="p-2">
                      <SelectFormulario
                        placeholder="Gênero"
                        icon={faCaretDown}
                        options={optionsGenero}
                        value={genero}
                        onChange={(e) => setGenero(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center uppercase font-bold  justify-center bg-lightGreen text-white">
                    <p>Endereço</p>
                  </div>

                  <div className="flex flex-col sm:flex-row">
                    <div className="p-2">
                      <InputFormulario
                        value={cep}
                        onChange={(e) => setCep(e.target.value)}
                        placeholder="CEP"
                        className="w-[9rem]"
                        icon={faSearch}
                        onClickIcon={handleCompleteCep}
                      />
                    </div>

                    <div className="p-2">
                      <InputFormulario
                        value={rua}
                        onChange={(e) => setRua(e.target.value)}
                        placeholder="Rua"
                        className="sm:w-[30rem]"
                      />
                    </div>

                    <div className="p-2">
                      <InputFormulario
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}
                        placeholder="Numero"
                        className="w-[8rem]"
                      />
                    </div>

                    <div className="p-2">
                      <InputFormulario
                        value={bairro}
                        onChange={(e) => setBairro(e.target.value)}
                        placeholder="Bairro"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <div className="p-2">
                      <InputFormulario
                        value={complemento}
                        onChange={(e) => setComplemento(e.target.value)}
                        placeholder="Complemento"
                      />
                    </div>

                    <div className="p-2">
                      <InputFormulario
                        value={cidade}
                        onChange={(e) => setCidade(e.target.value)}
                        placeholder="Cidade"
                      />
                    </div>

                    <div className="p-2">
                      <InputFormulario
                        value={estado}
                        onChange={(e) => setEstado(e.target.value)}
                        placeholder="Estado"
                      />
                    </div>

                    <div className="p-2">
                      <InputFormulario
                        placeholder="Pais"
                        value={pais}
                        onChange={(e) => setPais(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="flex items-center justify-center uppercase font-bold  bg-lightGreen text-white">
                    <p>Horta</p>
                  </div>

                  <div className="flex justify-around flex-col sm:flex-row">
                    <div className="p-2">
                      <div className="relative">
                        <select
                          value={selectedHorta}
                          className={`pl-10 pr-4 py-2 bg-darkerGray/20 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black\\`}
                          onChange={(e) => setSelectedHorta(e.target.value)}
                        >
                          <option disabled value="">
                            Horta que deseja fazer parte
                          </option>
                          {hortas.map((horta) => (
                            <option key={horta.nome} value={horta.nome}>
                              {horta.nome}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FontAwesomeIcon
                            icon={faCodeFork}
                            className="text-gray-400"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="p-2">
                      <SelectFormulario
                        placeholder="Capacitação?"
                        options={optionsCapacitacao}
                        value={capacitacao}
                        icon={faHand}
                        onChange={(e) => setCapacitacao(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="flex justify-around flex-col sm:flex-row">
                    <div className="p-2">
                      <SelectFormulario
                        placeholder="Pretende comercializar?"
                        options={optionsComercializar}
                        value={comercializar}
                        icon={faMoneyCheckDollar}
                        onChange={(e) => setComercializar(e.target.value)}
                      />
                    </div>

                    <div className="p-2">
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FontAwesomeIcon
                            icon={faBookmark}
                            className="text-gray-400"
                          />
                        </div>
                        <select
                          value={selectedObjetivo}
                          className={`pl-5 pr-4 py-2 bg-darkerGray/20 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black\\`}
                          onChange={(e) => setSelectedObjetivo(e.target.value)}
                        >
                          <option disabled value="">
                            Objetivo
                          </option>
                          {objetivos.map((objetivo) => (
                            <option
                              key={objetivo.objetivo}
                              value={objetivo.objetivo}
                            >
                              {objetivo.objetivo}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="justify-around flex p-2">
                    <Botao
                      type="button"
                      onClick={() => Router.replace("/pessoas/principal")}
                      className="w-5/12 bg-lightBlue hover:bg-darkBlue"
                    >
                      Voltar
                    </Botao>
                    {loading ? (
                      <LoadingAnimation />
                    ) : (
                      <Botao
                        form="formularioCadastro"
                        type="submit"
                        className="w-5/12 bg-lightGreen hover:bg-darkGreen"
                      >
                        Cadastrar
                      </Botao>
                    )}
                  </div>
                </div>
              </div>
              {/* Botões */}
            </form>

            {formSubmitted && (
              <Toast message="Pessoa adicionada com Sucesso!">
                <FontAwesomeIcon className="mr-2" icon={faCheck} />
              </Toast>
            )}
            {formError && (
              <Toast message="Erro ao enviar!">
                <FontAwesomeIcon className="mr-2" icon={faX} />
              </Toast>
            )}
          </div>
        </div>
      </div>
  );
};

export default FormularioPessoas;
