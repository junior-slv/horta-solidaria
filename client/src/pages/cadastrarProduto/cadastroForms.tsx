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
import Sidebar from "@/components/Sidebar";
import { Botao } from "../../components/Botao";

// Página conteúdo
const cadastroDefault = () => {
  return (
    <>
        <div className="overflow-y-hidden flex bg-beige">
          {/* Div Para sideBar */}
          <div>
            <Sidebar />
          </div>
          {/* Div para content */}
          <div className="flex justify-center items-center flex-col relative w-full">
            {/* Título da página */}
            <p className="font-bold text-lightGreen text-4xl top-5 absolute">
              Cadastrar Doação
            </p>
            <p className="font-semibold text-gray text-2xl top-20 absolute text-center">
            Preencha os Dados
            </p>
            {/* formulário */}
            <div className="flex-col relative w-[565px] h-[523px] mt-[80px] bg-white rounded-2xl justify-center items-center flex shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
              <div className="w-[464px]">
                <form action="">
                  {/* Input 1 */}
                  <div
                    className={`px-4 flex items-center bg-lightGray mb-[20px]`}
                  >
                    <span className={`mr-[40px] flex text-darkGrey text-lg block float-left`}>
                    <FontAwesomeIcon icon={faUser} />
                      </span>
                    <input
                      type={"text"}
                      placeholder="Nome"
                      className={` h-[60px] font-semibold text-base bg-transparent w-full text-darkGrey focus:outline-none border-none placeholder-darkGrey`}
                    />
                    </div>
                    {/* Input 2 */}
                    <div
                    className={`px-4 flex items-center bg-lightGray mb-[20px]`}
                  >
                    <span className={`mr-[40px] flex text-darkGrey text-lg block float-left`}>
                    <FontAwesomeIcon icon={faBox} />
                      </span>
                    <input
                      type={"number"}
                      placeholder="Quantidade"
                      className={` h-[60px] font-semibold text-base bg-transparent w-full text-darkGrey focus:outline-none border-none placeholder-darkGrey`}
                    />
                    </div>
                    {/* Input 3 */}
                    <div
                    className={`px-4 flex items-center bg-lightGray mb-[20px]`}
                  >
                    <span className={`mr-[40px] flex text-darkGrey text-lg block float-left`}>
                    <FontAwesomeIcon icon={faBasketShopping} />
                      </span>
                    <input
                      type={"text"}
                      placeholder="Produto"
                      className={` h-[60px] font-semibold text-base bg-transparent w-full text-darkGrey focus:outline-none border-none placeholder-darkGrey`}
                    />
                    </div>
                    {/* Input 4 */}
                    <div
                    className={`px-4 flex items-center bg-lightGray mb-[20px]`}
                  >
                    <span className={`mr-[40px] flex text-darkGrey text-lg block float-left`}>
                    <FontAwesomeIcon icon={faCalendarDay} />
                      </span>
                    <input
                      type={"date"}
                      placeholder="Data"
                      className={` h-[60px] font-semibold text-base bg-transparent w-full text-darkGrey focus:outline-none border-none placeholder-darkGrey`}
                    />
                    </div>
                  {/* Botões */}
                  <div className="justify-around flex">
                    <Botao className="w-5/12 bg-lightBlue hover:bg-darkBlue">
                      Voltar
                    </Botao>
                    <Botao className="w-5/12 bg-lightGreen hover:bg-darkGreen">
                      Cadastrar
                    </Botao>
                  </div>
                </form>
              </div>
            </div>
            {/* <img src={content.img} alt="imagem Default Cadastrar Doaçao" /> */}
          </div>
        </div>
    </>
  );
};

export default cadastroDefault;
