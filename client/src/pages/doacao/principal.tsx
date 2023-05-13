import React, { useContext, useEffect, useState } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import Router from "next/router";
import { AuthContext } from "@/contexts/AuthContext";
import Dashboard from "@/components/doacoes/dashboard";
import Cabecalho from "@/components/doacoes/cabecalho";
import { fetchDoacoes } from "@/services/api";
import Tabela from "@/components/doacoes/tabela";

const DoacaoMain = () => {

  const [totalDoacoes, setTotalDoacoes] = useState(0);
  // Quantidade Doada
  const [quantidadeDoada, setQuantidadeDoada] = useState(0);
  const { isAuth } = useContext(AuthContext);
  const [dados, setDados] = useState([]);


  useEffect(() => {
    // Verifica se o usuário está autenticado
    if (!isAuth) {
      Router.push("/");
    } else {
      // Carrega os dados das doações
      fetchDoacoes().then((data) => { 
        setDados(data);
        console.log(dados);
        // quantidade doações
        setTotalDoacoes(data.length);

        //quantidade doada
        let quantidadeTotal = 0;
        for (let index = 0; index < data.length; index++) {
          quantidadeTotal += data[index].quantidade;
        }        
        setQuantidadeDoada(quantidadeTotal);
      });
    }
  }, []);

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
          <Dashboard title="Quantidade de Doações" value={totalDoacoes} type="" />
          <Dashboard title="Quantidade doada" value={quantidadeDoada} type="Kg" />
        </div>
        <div className="w-10/12 justify-center text-center">
            <Tabela />
        </div>
      </div>
    </div>
  );
};

export default DoacaoMain;
