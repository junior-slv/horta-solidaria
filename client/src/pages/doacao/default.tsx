import React, { useEffect, useState, useContext } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import { Botao } from "../../components/buttons/Botao";
import { useRouter } from "next/router";
import { AuthContext } from "@/contexts/AuthContext";
import { fetchDoacoes } from "@/services/api";

const Default = () => {
  const { isAuth } = useContext(AuthContext);
  const router = useRouter();
  const [hasDonations, setHasDonations] = useState(false);

  useEffect(() => {
    // Verificar se o usuário está autenticado
    if (!isAuth) {
      return;
    } else {
      // Obter doações da API ou realizar qualquer outra lógica necessária
      fetchDoacoes()
        .then((data) => {
          setHasDonations(Array.isArray(data) && data.length > 0);
        })
        .catch((error) => {
          console.error("Erro ao obter doações:", error);
        });
    }
  }, [isAuth, router]);


  if (hasDonations) {
    router.push("/doacao/principal");
    return null; // Redirecionando, então não há necessidade de renderizar o conteúdo
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
        <p className="font-bold text-lightGreen text-4xl top-5 absolute">
          Doações
        </p>
        {/* Se não houver doações cadastradas */}
        <div>
          <p className="font-semibold text-lightGray text-2xl top-20 text-center">
            Nenhuma doação cadastrada
          </p>
          <img
            src="/images/emptyDonation.png"
            alt="imagem Default Cadastrar Doação"
          />
          <div onClick={() => router.push("/doacao/formulario")} className="flex justify-center">
            <Botao className="bg-lightGreen hover:bg-darkGreen">
              Adicionar <span className="text-2xl">+</span>
            </Botao>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Default;
