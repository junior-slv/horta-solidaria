import React, { useContext, useEffect, useState } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import { Botao } from "../../components/buttons/Botao";
import { useRouter } from "next/router";
import { AuthContext } from "@/contexts/AuthContext";
import Tabela from "./tabela";
import { fetchPessoas } from "@/services/api";

const PessoasMain = () => {
  const { isAuth } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {

  }, []);
  return (
    <div className="w-screen flex bg-beige">
      <Sidebar/>
      <div className="flex flex-col relative w-4/5">
            <div className="flex justify-around p-2">
            <div>
            <p className="font-bold text-lightGreen text-4xl">
              Pessoas
            </p>
          </div>
          <div>
            <Botao
              onClick={() => router.push("/pessoas/formulario")}
              className="bg-lightGreen hover:bg-darkGreen"
            >
              <span className="text-2xl">+</span> Adicionar Pessoa
            </Botao>
          </div>
            </div>
          <Tabela />
        </div>
    </div>
  );
};

export default PessoasMain;
