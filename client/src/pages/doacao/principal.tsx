import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import { Botao } from "../../components/buttons/Botao";
import Router from "next/router";
import { AuthContext } from "@/contexts/AuthContext";


const DoacaoMain = () => {
  const { isAuth } = useContext(AuthContext);

  // Verificar se o usuário está autenticado
  if (!isAuth) {
    return null; // Ou pode exibir uma mensagem de carregamento ou redirecionar para a página de login diretamente
  }

  return (
    <div className="overflow-y-hidden flex bg-beige">
      {/* Div Para sideBar */}
      <div>
        <Sidebar />
      </div>
      {/* Div para content */}
      <div className="flex justify-center items-center flex-col relative w-full">
        {/* Título da página */}
        <p className="font-bold text-lightGreen text-4xl left-14 top-5 absolute">
          Doações
        </p>
        {/* Menus */}
        <ul className="list-none m-0 p-0">
          <li className="inline-block">
            <button className="absolute top-[80px] left-[40px] py-[10px] bg-lightGreen text-black bg-white text-xl px-[15px] py-2 rounded shadow font-semibold mt-8">
              <FontAwesomeIcon icon={faFilter} /> Filtrar{" "}
            </button>
          </li>
          <li className="inline-block absolute top-[80px] left-[180px]">
            <Botao onClick={() => Router.push("/doacao/formulario")} className="bg-lightGreen hover:bg-darkGreen">
              {" "}
              <span className="text-2xl">+</span> Adicionar Doação
            </Botao>
          </li>
          <li className="inline-block absolute top-[125px] left-[450px]">
            <p>1 Row Selected</p>
          </li>
          <li className="inline-block bg-white rounded ">
            <div
              className={`absolute top-[100px] right-[40px] py-3 px-4 rounded-lg my-2 flex items-center rounded-md bg-white`}
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className={`mr-2 text-black text-lg block float-left cursor-pointer`}
              />
              <input
                type={"search"}
                placeholder="Pesquisar..."
                className={`text-base bg-transparent w-full text-white focus:outline-none border-none placeholder-black`}
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoacaoMain;