import React, { useEffect, useState, useContext } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import { Botao } from "../../components/buttons/Botao";
import { useRouter } from "next/router";
import { AuthContext } from "@/contexts/AuthContext";
import { fetchDonations } from "@/services/api";

const Default = () => {
  const { isAuth } = useContext(AuthContext);
  const router = useRouter();
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    // Verificar se o usuário está autenticado
    if (!isAuth) {
      router.push('/login'); // Redirecionar para a página de login se não estiver autenticado
    } else {
      // Obter doações da API ou realizar qualquer outra lógica necessária
      fetchDonations()
        .then((data) => {
          setDonations(data);
        })
        .catch((error) => {
          console.error("Erro ao obter doações:", error);
        });
    }
  }, [isAuth, router]);

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
        <p className="font-bold text-lightGreen text-4xl top-5 absolute">
          Doações
        </p>
        {donations.length > 0 ? (
          // Se houver doações cadastradas
          <div>
            {/* Renderizar as doações */}
          </div>
        ) : (
          // Se não houver doações cadastradas
          <div>
            <p className="font-semibold text-lightGray text-2xl top-20 absolute text-center">
              Nenhuma doação cadastrada
            </p>
            <img
              src="/images/emptyDonation.png"
              alt="imagem Default Cadastrar Doação"
            />
            <div onClick={() => router.push("/doacao/formulario")} className="">
              <Botao className="bg-lightGreen hover:bg-darkGreen">
                Adicionar <span className="text-2xl">+</span>
              </Botao>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Default;
