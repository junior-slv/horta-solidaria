import React, { useEffect, useState } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import { Botao } from "../../components/buttons/Botao";
import Router from "next/router";
import { fetchDonations } from "@/services/api";


// Página conteúdo
const DoacaoMain = () => {

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
      <div>
        <Sidebar />
      </div>
      {/* Div para content */}
      <div className="flex justify-center items-center flex-col relative w-full">
        {/* Título da página */}
        <p className="font-bold text-lightGreen text-4xl top-5 absolute">
          Doações
        </p>
        <p className="font-semibold text-gray text-2xl top-20 absolute text-center">
          Sem nenhuma doação cadastrada
        </p>
        <img src="/images/emptyDonation.jpg" alt="imagem Default Cadastrar Doaçao" />
        <div onClick={() => Router.push("/doacao/formulario")} className="">
          <Botao className="bg-lightGreen hover:bg-darkGreen">
            Adicionar <span className="text-2xl">+</span>
          </Botao>
        </div>
      </div>
    </div>
  );
};
export default DoacaoMain;
