import React, { useEffect, useState } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import { Botao } from "../../components/buttons/Botao";
import Router from "next/router";
import { fetchDonations } from "@/services/api";


const Default = () => {
  return (
    <div className="overflow-y-hidden flex bg-beige">
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
      <p className="font-semibold text-lightGray text-2xl top-20 absolute text-center">
        Nenhuma doação cadastrada
      </p>
      <img src="/images/emptyDonation.png" alt="imagem Default Cadastrar Doaçao" />
      <div onClick={() => Router.push("/doacao/formulario")} className="">
        <Botao className="bg-lightGreen hover:bg-darkGreen">
          Adicionar <span className="text-2xl">+</span>
        </Botao>
      </div>
    </div>
  </div>
  );
};

export default Default