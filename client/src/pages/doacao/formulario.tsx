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
import React from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import { Botao } from "../../components/buttons/Botao";
import FormInput from "@/components/inputs/FormInput";
import FormRow from "@/components/FormRow";
import Router from "next/router";

// Página conteúdo
const cadastroDefault = () => {
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
                <FormInput type="text" placeholder="Nome" />
              </FormRow>
              {/* Input 2 */}
              <FormRow label={<FontAwesomeIcon icon={faBox} />}>
                <FormInput type="number" placeholder="Quantidade" />
              </FormRow>
              {/* Input 3 */}
              <FormRow label={<FontAwesomeIcon icon={faBasketShopping} />}>
                <FormInput type="text" placeholder="Produto" />
              </FormRow>
              {/* Input 4 */}
              <FormRow label={<FontAwesomeIcon icon={faCalendarDay} />}>
                <FormInput type="date" placeholder="Data" />
              </FormRow>
              {/* Botões */}
              <div className="justify-around flex">
                <Botao onClick={() => Router.push("/doacao/formulario")} className="w-5/12 bg-lightBlue hover:bg-darkBlue">
                  Voltar
                </Botao>
                <Botao className="w-5/12 bg-lightGreen hover:bg-darkGreen">
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