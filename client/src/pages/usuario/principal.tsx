import { Botao } from '@/components/buttons/Botao';
import Sidebar from '@/components/sidebar/Sidebar';
import { AuthContext } from '@/contexts/AuthContext';
import { faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Router from 'next/router';
import React, { useContext, useState } from 'react'
import TabelaUsuarios from './tabela';


const Usuarios = () => {
    const { isAuth } = useContext(AuthContext);
    const [dados, setDados] = useState([])
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
            Usuarios
          </p>
          {/* Menus */}
          <ul className="list-none m-0 p-0">
            <li className="inline-block">
            <button
                className="absolute top-[80px] left-[40px]  bg-lightGreen text-white text-xl px-[15px] py-2 rounded shadow font-semibold mt-8"
              >
                <FontAwesomeIcon icon={faFilter} /> Filtrar
              </button>
            </li>
            <li className="inline-block absolute top-[80px] left-[180px]">
              <Botao onClick={() => Router.push("/pessoas/principal")} className="bg-lightGreen hover:bg-darkGreen">
                {" "}
                <span className="text-2xl">+</span> Adicionar Pessoa
              </Botao>
            </li>
            <li className="inline-block absolute top-[125px] left-[450px]">
              <p>1 Linha selecionada</p>
            </li>
            <li className="inline-block bg-white rounded ">
              <div
                className={`absolute top-[100px] right-[40px] py-3 px-4 my-2 flex items-center rounded-md bg-white`}
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
          <TabelaUsuarios/>
  
        </div>
      </div>
    );
  };

export default Usuarios