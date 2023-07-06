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
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "@/components/sidebar/Sidebar";
import { Botao } from "../../components/buttons/Botao";
import FormInput from "@/components/inputs/FormInput";
import FormRow from "@/components/FormRow";
import Router from "next/router";
import { AuthContext } from "@/contexts/AuthContext";
import { z } from "zod";
import Toast from "@/components/toast/Toast";
import { fetchHortas } from "@/services/api/apiHorta";
import { fetchObjetivos } from "@/services/api/apiObjetivo";
import { addPessoa } from "@/services/api";
import LoadingAnimation from "@/components/loadings/LoadingAnimation";

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
  complemento: z.string().nonempty(),
  cidade: z.string().nonempty(),
  pais: z.string().nonempty(),
  estado: z.string().nonempty(),
  telefone: z.string().nonempty(),
  telefonerecado: z.string().nonempty(),
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
  const [pais, setPais] = useState<string>("");
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

  const dados = [
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
  ];

  const handleAddDonation = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // Validação dos dados do formulário
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
      // Resetando os valores após o envio
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
      setPais("");
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

  useEffect(() => {
    fetchHortas().then((data) => {
      if(data != undefined || null) {
        setHortas(data.reverse());
      }
    });
    fetchObjetivos().then((data) => {
      if(data != undefined || null){
        setObjetivos(data.reverse());
      }
    });
  }, []);

  // Verificar se o usuário está autenticado
  if (!isAuth) {
    // return null; // Ou pode exibir uma mensagem de carregamento ou redirecionar para a página de login diretamente
  }

  return (
    <div className="flex overflow-x-hidden bg-beige">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="font-bold text-darkGreen text-4xl mb-10">
          <p>Cadastrar Pessoa</p>
        </div>
        <div className="flex flex-col rounded-2xl">
          <div className=" flex flex-col items-center justify-center">
            <form
              id="formularioCadastro"
              className="flex flex-col"
              onSubmit={handleAddDonation}
            >
              <div className="flex bg-white rounded-2xl">
                <div className="p-2">
                  <div className="flex items-center justify-center bg-lightGreen text-white">
                    <p>Dados pessoais</p>
                  </div>
                  <FormRow label={<FontAwesomeIcon icon={faUser} />}>
                    <FormInput
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      type="text"
                      placeholder="Nome"
                    />
                  </FormRow>

                  <FormRow label={<FontAwesomeIcon icon={faMailBulk} />}>
                    <FormInput
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Email"
                    />
                  </FormRow>

                  <FormRow label={<FontAwesomeIcon icon={faIdCard} />}>
                    <FormInput
                      value={cpf}
                      onChange={(e) => setCpf(e.target.value)}
                      type="text"
                      placeholder="CPF"
                    />
                  </FormRow>

                  <FormRow label={<FontAwesomeIcon icon={faPhone} />}>
                    <FormInput
                      value={telefone}
                      onChange={(e) => setTelefone(e.target.value)}
                      type="text"
                      placeholder="Telefone"
                    />
                  </FormRow>

                  <FormRow label={<FontAwesomeIcon icon={faPhoneSquare} />}>
                    <FormInput
                      value={telefonerecado}
                      onChange={(e) => setTelefoneRecado(e.target.value)}
                      type="text"
                      placeholder="Telefone recado"
                    />
                  </FormRow>

                  <FormRow label={<FontAwesomeIcon icon={faCalendar} />}>
                    <FormInput
                      value={dataNascimento}
                      onChange={(e) => {
                        setDatanascimento(e.target.value);
                        console.log(dataNascimento);
                      }}
                      type="date"
                      placeholder="Data de nascimento"
                    />
                  </FormRow>
                  <FormRow label={<FontAwesomeIcon icon={faPerson} />}>
                    <FormInput
                      value={dependentes}
                      onChange={(e) =>
                        setDependentes(e.target.value.toString())
                      }
                      type="number"
                      placeholder="Dependentes"
                    />
                  </FormRow>

                  <FormRow className="flex-col">
                    <FontAwesomeIcon
                      className="mr-12 mt-1 flex text-darkGrey text-lg  float-left"
                      icon={faEarth}
                    />

                    <select
                      value={etnia}
                      className="h-[30px] font-semibold text-base appearance-none bg-transparent w-80 text-darkGrey focus:outline-none border-none placeholder-darkGrey"
                      onChange={(e) => setEtnia(e.target.value)}
                    >
                      <option disabled value="">
                        Etnia
                      </option>
                      <option value={"Branco/Caucasiano"}>
                        Branco/Caucasiano
                      </option>
                      <option value={"Negro/Afrodescendente"}>
                        Negro/Afrodescendente
                      </option>
                      <option value={"Pardo"}>Pardo</option>
                      <option value={"Latino/Hispano"}>Latino/Hispano</option>
                      <option value={"Asiático"}>Asiático</option>
                      <option value={"Indígena/Nativo"}>Indígena/Nativo</option>
                      <option value={"Mestiço/Multiracial"}>
                        Mestiço/Multirracial
                      </option>
                    </select>
                  </FormRow>

                  <FormRow className="flex-col">
                    <FontAwesomeIcon
                      className="mr-12 mt-1 flex text-darkGrey text-lg  float-left"
                      icon={faMoneyBills}
                    />
                    <select
                      value={rendaFamiliar}
                      className="h-[30px] font-semibold text-base appearance-none bg-transparent w-80 text-darkGrey focus:outline-none border-none placeholder-darkGrey"
                      onChange={(e) => setRendaFamiliar(e.target.value)}
                    >
                      <option className="" disabled value="">
                        Renda familiar
                      </option>
                      <option value={"Abaixo de um salário mínimo"}>
                        Abaixo de um salário mínimo
                      </option>
                      <option value={"1 a 3 salários mínimos"}>
                        1 a 3 salários mínimos
                      </option>
                      <option value={"Acima de 3 salários mínimos"}>
                        Acima de 3 salários mínimos
                      </option>
                    </select>
                  </FormRow>

                  <FormRow className="flex-col">
                    <FontAwesomeIcon
                      className="mr-12 mt-1 flex text-darkGrey text-lg  float-left"
                      icon={faArchive}
                    />
                    <select
                      value={estadoCivil}
                      className="h-[30px] font-semibold text-base appearance-none bg-transparent w-80 text-darkGrey focus:outline-none border-none placeholder-darkGrey"
                      onChange={(e) => setEstadoCivil(e.target.value)}
                    >
                      <option disabled value="">
                        Estado Cívil
                      </option>
                      <option value="Solteiro(a)">Solteiro</option>
                      <option value="Casado(a)">Casado</option>
                      <option value="Divorciado(a)">Divorciado</option>
                      <option value="Separado(a)">Separado</option>
                      <option value="Viúvo(a)">Viúvo</option>
                    </select>
                  </FormRow>

                  <FormRow className="flex-col">
                    <FontAwesomeIcon
                      className="mr-12 mt-1 flex text-darkGrey text-lg  float-left"
                      icon={faGenderless}
                    />
                    <select
                      value={genero}
                      className="h-[30px] font-semibold text-base appearance-none bg-transparent w-80 text-darkGrey focus:outline-none border-none placeholder-darkGrey"
                      onChange={(e) => setGenero(e.target.value)}
                    >
                      <option disabled value="">
                        Gênero
                      </option>
                      <option value="Homem">Homem</option>
                      <option value="Mulher">Mulher</option>
                      <option value="Não binário">Não binário</option>
                      <option value="Agênero">Agênero</option>
                      <option value="Gênero fluido">Gênero fluido</option>
                      <option value="Transgênero">Transgênero</option>
                    </select>
                  </FormRow>
                </div>
                <div className="p-2">
                  <div className="flex items-center justify-center bg-lightGreen text-white">
                    <p>Endereço</p>
                  </div>

                  <FormRow>
                    <FormInput
                      value={cep}
                      onChange={(e) => setCep(e.target.value)}
                      type="text"
                      placeholder="CEP"
                    />
                  </FormRow>

                  <FormRow>
                    
                    <FormInput
                      value={rua}
                      onChange={(e) => setRua(e.target.value)}
                      type="text"
                      placeholder="Rua"
                    />
                  </FormRow>

                  <FormRow>
                    <FormInput
                      value={numero}
                      onChange={(e) => setNumero(e.target.value)}
                      type="text"
                      placeholder="Numero"
                    />
                  </FormRow>
                  <FormRow>
                    <FormInput
                      value={bairro}
                      onChange={(e) => setBairro(e.target.value)}
                      type="text"
                      placeholder="Bairro"
                    />
                  </FormRow>
                  <FormRow>
                    <FormInput
                      value={complemento}
                      onChange={(e) => setComplemento(e.target.value)}
                      type="text"
                      placeholder="Complemento"
                    />
                  </FormRow>
                  <FormRow>
                    <FormInput
                      value={cidade}
                      onChange={(e) => setCidade(e.target.value)}
                      type="text"
                      placeholder="Cidade"
                    />
                  </FormRow>

                  <FormRow>
                    <FormInput
                      value={estado}
                      onChange={(e) => setEstado(e.target.value)}
                      type="text"
                      placeholder="Estado"
                    />
                  </FormRow>

                  <FormRow>
                    <FormInput
                      value={pais}
                      onChange={(e) => setPais(e.target.value)}
                      type="text"
                      placeholder="Pais"
                    />
                  </FormRow>


                </div>

                <div className="">
                  <div className="flex items-center justify-center bg-lightGreen text-white m-2">
                    <p>Horta</p>
                  </div>
                  <FormRow>
                    <FontAwesomeIcon
                      className="mr-12 mt-1 flex text-darkGrey text-lg  float-left"
                      icon={faCodeFork}
                    />
                    <select
                      value={selectedHorta}
                      className="h-[30px] font-semibold text-base appearance-none bg-transparent w-80 text-darkGrey focus:outline-none border-none placeholder-darkGrey"
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
                  </FormRow>

                  <FormRow
                    className="flex-col text-lg"
                    label="Tem capacitação ou experiência no cultivo de hortas?"
                  >
                    <div className="flex text-lg">
                      <div className="mr-2">
                        <input
                          type="radio"
                          value="Sim"
                          checked={capacitacao === "Sim"}
                          onChange={() => setCapacitacao("Sim")}
                        />
                        <label htmlFor="abaixo">Sim</label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          value="Não"
                          checked={capacitacao === "Não"}
                          onChange={() => setCapacitacao("Não")}
                        />
                        <label htmlFor="1a3">Não</label>
                      </div>
                    </div>
                  </FormRow>

                  <FormRow
                    className="flex-col"
                    label="Se pretende comercializar, em qual local será comercializado?"
                  >
                    <div>
                      <input
                        type="radio"
                        value="Na horta"
                        checked={comercializar === "Na horta"}
                        onChange={() => setComercializar("Na horta")}
                      />
                      <label>Na horta</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="Em casa"
                        checked={comercializar === "Em casa"}
                        onChange={() => setComercializar("Em casa")}
                      />
                      <label>Em casa</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="No bairro e proximidades"
                        checked={comercializar === "No bairro e proximidades"}
                        onChange={() =>
                          setComercializar("No bairro e proximidades")
                        }
                      />
                      <label>No bairro e proximidades</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="Não pretende comercializar"
                        checked={comercializar === "Não pretende comercializar"}
                        onChange={() =>
                          setComercializar("Não pretende comercializar")
                        }
                      />
                      <label>Não pretende comercializar</label>
                    </div>
                  </FormRow>

                  <FormRow>
                    <FontAwesomeIcon
                      className="mr-12 mt-1 flex text-darkGrey text-lg  float-left"
                      icon={faBookmark}
                    />
                    <select
                      className="h-[30px] font-semibold text-base appearance-none bg-transparent w-80 text-darkGrey focus:outline-none border-none placeholder-darkGrey"
                      value={selectedObjetivo}
                      onChange={(e) => setSelectedObjetivo(e.target.value)}
                    >
                      <option disabled value="">
                        Qual objetivo com a horta?
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
                  </FormRow>
                </div>
              </div>
              {/* Botões */}
              <div className="justify-around flex">
                <Botao
                  type="button"
                  onClick={() => Router.replace("/doacao/principal")}
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
            </form>

            {formSubmitted && (
              <Toast message="Doação adicionada com Sucesso!">
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
    </div>
  );
};

export default FormularioPessoas;
