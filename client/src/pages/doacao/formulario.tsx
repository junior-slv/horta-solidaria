// Imports para o componente
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //importação do componente
import {
  faDiagramProject,
  faUser,
  faBox,
  faCalendarDays,
  faCalendarDay,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons"; // importação do icone individual
import React, { useState } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import { Botao } from "../../components/buttons/Botao";
import FormInput from "@/components/inputs/FormInput";
import FormRow from "@/components/FormRow";
import Router from "next/router";
import { addDonation } from "@/services/api";

// Página conteúdo
const cadastroDefault = () => {
  //variaveis q armazenam o conteudo para enviar no formulário
  const [doador, setDoador] = useState<string | undefined>();
  const [produto, setProduto] = useState<string | undefined>();
  const [quantidade, setQuantidade] = useState<number | undefined>();
  const [data, setData] = useState<string | undefined>();

  //envia o formulário com o conteudo no corpo da requisição
  const handleAddDonation = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // cancela o comportamento padrão do evento
    try {
      addDonation(doador, produto, quantidade, data);
      console.log('deu bao');
    } catch (err) {
      console.log('Error' + err);
    }
  };
  return (
    <div className="overflow-y-hidden flex bg-beige">
      <Sidebar />
      {/* Div para content */}
      <div className="flex justify-center items-center flex-col relative w-full">
        {/* Título da página */}
        <p className="font-bold text-darkGreen text-4xl top-5 absolute">
          Cadastrar Doação
        </p>
        {/* formulário */}
        <div className="flex-col relative w-[565px] h-[523px] mt-[80px] bg-white rounded-2xl justify-center items-center flex shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
          <div className="w-[464px]">
            <form action="">
              {/* Input 1 */}
              <FormRow label={<FontAwesomeIcon icon={faUser} />}>
                <FormInput onChange={(e) => setDoador(e.target.value)} type="text" placeholder="Nome" />
              </FormRow>
              {/* Input 2 */}
              <FormRow label={<FontAwesomeIcon icon={faBox} />}>
                <FormInput onChange={(e) => setQuantidade(parseInt(e.target.value))} type="number" placeholder="Quantidade" />
              </FormRow>
              {/* Input 3 */}
              <FormRow label={<FontAwesomeIcon icon={faBasketShopping} />}>
                <FormInput onChange={(e) => setProduto(e.target.value)} type="text" placeholder="Produto" />
              </FormRow>
              {/* Input 4 */}
              <FormRow label={<FontAwesomeIcon icon={faCalendarDay} />}>
                <FormInput onChange={(e) => {
                  setData(e.target.value)
                  console.log(data)
                }}  type="date" placeholder="Data" />
              </FormRow>
              {/* Botões */}
              <div className="justify-around flex">
                <Botao onClick={() => Router.push("/doacao/principal")} className="w-5/12 bg-lightBlue hover:bg-darkBlue">
                  Voltar
                </Botao>
                <Botao onClick={handleAddDonation} className="w-5/12 bg-lightGreen hover:bg-darkGreen">
                  Cadastrar
                </Botao>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default cadastroDefault;