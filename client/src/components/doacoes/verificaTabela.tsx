import { AuthContext } from "@/contexts/AuthContext";
import { fetchDonations } from "@/services/api";
import Router, { useRouter } from "next/router";
import React, { useEffect, useState, useContext } from "react";
import Tabela from "./tabela";

function VerificaTabela() {

    const { isAuth } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        // Verificar se o usuário está autenticado
        if (!isAuth) {
        } else {
          // Obter doações da API ou realizar qualquer outra lógica necessária
          fetchDonations()
            .then((data) => {
              console.log(data);
            })
            .catch((error) => {
              console.error("Erro ao obter doações:", error);
            });
        }
      }, [isAuth, router]);

    return (
          <Tabela />
    );
  };
  

export default VerificaTabela;