import React, { useContext, useEffect, useState } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import { Botao } from "../../components/buttons/Botao";
import Router from "next/router";
import { fetchDonations } from "@/services/api";
import { AuthContext } from "@/contexts/AuthContext";

const UsersMain = () => {
  const { isAuth } = useContext(AuthContext);

  // Verificar se o usuário está autenticado
  if (!isAuth) {
    return null; // Ou pode exibir uma mensagem de carregamento ou redirecionar para a página de login diretamente
  }

  //estado que armazena as variavéis no campos
  const [dados, setDados] = useState([]);

  //atualiza as doações toda vez q recarregar a página
  useEffect(() => {
    fetchDonations().then((data) => {
      setDados(data);
      console.log(data);
    });
  }, []);

  return (
    <div className="overflow-y-hidden flex">
      {/* Div Para sideBar */}
      <div className="z-50">
        <Sidebar />
      </div>
      {/* Div para content */}
      <div className="flex justify-center z-0 bg-beige items-center flex-col relative w-full">
        {/* Título da página */}
        <p className="font-bold text-lightGreen text-4xl top-5 absolute">
          Pessoas
        </p>
        <p className="font-semibold text-darkerGrey text-2xl top-20 absolute text-center">
          Nenhuma pessoa cadastrada
        </p>
        <img src="/images/emptyUsers.png" alt="imagem Default Cadastrar Pessoas" className="w-[550px] h-[400px]"/>
        <div onClick={() => Router.push("/pessoas")} className="">
          <Botao className="bg-lightGreen hover:bg-darkGreen">
            Adicionar <span className="text-2xl">+</span> 
          </Botao>
        </div>
      </div>
    </div>
  );
};

export default UsersMain;
