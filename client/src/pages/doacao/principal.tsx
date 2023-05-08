import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import { Botao } from "../../components/buttons/Botao";
import Router from "next/router";
import { AuthContext } from "@/contexts/AuthContext";
import Dashboard from "@/components/doacoes/dashboard";
import VerificaTabela from "@/components/doacoes/verificaTabela";
import Cabecalho from "@/components/doacoes/cabecalho";


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
      <div className="flex justify-center items-center flex-col relative w-full h-full mt-[20px]">
        {/* Título da página */}
        <p className="font-bold text-lightGreen text-4xl mb-[40px]">
          Doações
        </p>
        {/* Menu */}
        <div>
            <Cabecalho />
        </div>
        {/* DashBoard */}
        <div className="grid md:grid-cols-3 gap-7 grid-cols-0">
          <Dashboard title="Quantidade de Doações" value={10} type="" />
          <Dashboard title="Quantidade de Doadores" value={60} type="" />
          <Dashboard title="Quantidade doada" value={90} type="Kg" />
        </div>
        <div className="w-10/12 justify-center text-center">
            <VerificaTabela />
        </div>
      </div>
    </div>
  );
};

export default DoacaoMain;
