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

const cadastroDefault: React.FC = () => {
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
    }
    console.log(dados);
  };

  useEffect(() => {
    fetchHortas().then((data) => {
      setHortas(data.reverse());
    });
    fetchObjetivos().then((data) => {
      setObjetivos(data.reverse());
    });
  }, []);

  // Verificar se o usuário está autenticado
  if (!isAuth) {
    // return null; // Ou pode exibir uma mensagem de carregamento ou redirecionar para a página de login diretamente
  }

  return (
<div className="flex bg-beige">
  <Sidebar />
  <div className="flex justify-center items-center flex-col relative w-full">
    <p className="font-bold text-darkGreen text-4xl top-5 absolute">
      Cadastrar Pessoa
    </p>
    <div className="flex-col relative w-[565px] h-[523px] mt-[80px] rounded-2xl justify-center items-center flex">
      <div className="w-[464px] flex flex-col items-center justify-center">
        <form id="form" className="flex" onSubmit={handleAddDonation}>
          <div className="flex flex-col">
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

                <FormRow label={<FontAwesomeIcon icon={faCalendar} />}>
                  <FormInput
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    type="text"
                    placeholder="Telefone"
                  />
                </FormRow>

                <FormRow label={<FontAwesomeIcon icon={faCalendar} />}>
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

                <div>
                  <h2>Endereço</h2>
                  <FormRow label={<FontAwesomeIcon icon={faIdCard} />}>
                    <FormInput
                      value={rua}
                      onChange={(e) => setRua(e.target.value)}
                      type="text"
                      placeholder="Rua"
                    />
                  </FormRow>

                  <FormRow label={<FontAwesomeIcon icon={faIdCard} />}>
                    <FormInput
                      value={numero}
                      onChange={(e) => setNumero(e.target.value)}
                      type="text"
                      placeholder="Numero"
                    />
                  </FormRow>
                  <FormRow label={<FontAwesomeIcon icon={faIdCard} />}>
                    <FormInput
                      value={bairro}
                      onChange={(e) => setBairro(e.target.value)}
                      type="text"
                      placeholder="Bairro"
                    />
                  </FormRow>
                  <FormRow label={<FontAwesomeIcon icon={faIdCard} />}>
                    <FormInput
                      value={complemento}
                      onChange={(e) => setComplemento(e.target.value)}
                      type="text"
                      placeholder="Complemento"
                    />
                  </FormRow>
                  <FormRow label={<FontAwesomeIcon icon={faIdCard} />}>
                    <FormInput
                      value={cidade}
                      onChange={(e) => setCidade(e.target.value)}
                      type="text"
                      placeholder="Cidade"
                    />
                  </FormRow>
                  <FormRow label={<FontAwesomeIcon icon={faIdCard} />}>
                    <FormInput
                      value={pais}
                      onChange={(e) => setPais(e.target.value)}
                      type="text"
                      placeholder="Pais"
                    />
                  </FormRow>
                  <FormRow label={<FontAwesomeIcon icon={faIdCard} />}>
                    <FormInput
                      value={estado}
                      onChange={(e) => setEstado(e.target.value)}
                      type="text"
                      placeholder="Estado"
                    />
                  </FormRow>
                  <FormRow label={<FontAwesomeIcon icon={faIdCard} />}>
                    <FormInput
                      value={cep}
                      onChange={(e) => setCep(e.target.value)}
                      type="text"
                      placeholder="Cep"
                    />
                  </FormRow>
                </div>

                <FormRow label={<FontAwesomeIcon icon={faPerson} />}>
                  <FormInput
                    value={dependentes}
                    onChange={(e) => setDependentes(e.target.value.toString())}
                    type="number"
                    placeholder="Dependentes"
                  />
                </FormRow>
              </div>
              <div>
                <FormRow className="flex-col" label="Renda Familiar">
                  <select
                    value={rendaFamiliar}
                    onChange={(e) => setRendaFamiliar(e.target.value)}
                  >
                    <option value="">Selecione a renda familiar</option>
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

                <FormRow
                  className="flex-col"
                  label="Tem capacitação ou experiência no cultivo de hortas?"
                >
                  <div className="flex">
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

                <FormRow className="flex-col" label="Etnia">
                  <select
                    value={etnia}
                    onChange={(e) => setEtnia(e.target.value)}
                  >
                    <option value="">Selecione a etnia</option>
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

                <FormRow className="flex-col" label="Gênero">
                  <div>
                    <input
                      type="radio"
                      value="Homem"
                      checked={genero === "Homem"}
                      onChange={() => setGenero("Homem")}
                    />
                    <label>Homem</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      value="Mulher"
                      checked={genero === "Mulher"}
                      onChange={() => setGenero("Mulher")}
                    />
                    <label>Mulher</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      value="Não binário"
                      checked={genero === "Não binário"}
                      onChange={() => setGenero("Não binário")}
                    />
                    <label>Não binário</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      value="Agênero"
                      checked={genero === "Agênero"}
                      onChange={() => setGenero("Agênero")}
                    />
                    <label>Agênero</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      value="Gênero fluido"
                      checked={genero === "Gênero fluido"}
                      onChange={() => setGenero("Gênero fluido")}
                    />
                    <label>Gênero fluido</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      value="Transgênero"
                      checked={genero === "Transgênero"}
                      onChange={() => setGenero("Transgênero")}
                    />
                    <label>Transgênero</label>
                  </div>
                </FormRow>

                <FormRow className="flex-col" label="Estado Civil">
                  <div>
                    <input
                      type="radio"
                      value="Solteiro(a)"
                      checked={estadoCivil === "Solteiro(a)"}
                      onChange={() => setEstadoCivil("Solteiro(a)")}
                    />
                    <label>Solteiro</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      value="Casado(a)"
                      checked={estadoCivil === "Casado(a)"}
                      onChange={() => setEstadoCivil("Casado(a)")}
                    />
                    <label>Casado</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      value="Divorciado(a)"
                      checked={estadoCivil === "Divorciado(a)"}
                      onChange={() => setEstadoCivil("Divorciado(a)")}
                    />
                    <label>Divorciado</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      value="Separado(a)"
                      checked={estadoCivil === "Separado(a)"}
                      onChange={() => setEstadoCivil("Separado(a)")}
                    />
                    <label>Separado</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      value="Viúvo(a)"
                      checked={estadoCivil === "Viúvo(a)"}
                      onChange={() => setEstadoCivil("Viúvo(a)")}
                    />
                    <label>Viúvo</label>
                  </div>
                </FormRow>

                <FormRow label="Objetivo">
                  <select
                    value={selectedObjetivo}
                    onChange={(e) => setSelectedObjetivo(e.target.value)}
                  >
                    <option value="">Selecione um Objetivo</option>
                    {objetivos.map((objetivo) => (
                      <option key={objetivo.objetivo} value={objetivo.objetivo}>
                        {objetivo.objetivo}
                      </option>
                    ))}
                  </select>
                </FormRow>

                <FormRow label="Hortas">
                  <select
                    value={selectedHorta}
                    onChange={(e) => setSelectedHorta(e.target.value)}
                  >
                    <option value="">Selecione uma horta</option>
                    {hortas.map((horta) => (
                      <option key={horta.nome} value={horta.nome}>
                        {horta.nome}
                      </option>
                    ))}
                  </select>
                </FormRow>
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
                <Botao
                  form="form"
                  type="submit"
                  className="w-5/12 bg-lightGreen hover:bg-darkGreen"
                >
                  Cadastrar
                </Botao>
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

export default cadastroDefault;
