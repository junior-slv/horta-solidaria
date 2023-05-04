import React from "react";
import Sidebar from "@/components/Sidebar";

// Componente Botão para ser utilizado na página
const Botao = () => {
  return (
    <>
      <button className="text-xl bg-lightGreen px-5 py-2 rounded text-white shadow hover:bg-darkGreen font-semibold mt-8">
        Adicionar Doação
        <span className="pl-2 text-2xl">+</span>
      </button>
    </>
  );
};

// Página conteúdo
const cadastroDefault = () => {
  const PageContent = [
    {
      title: "Doações",
      subTitle: "Sem nenhuma doação cadastrada",
      img: "https://media.istockphoto.com/id/1143127488/pt/vetorial/food-and-clothes-donation-vector-flat-illustration-social-care-and-charity-concept.jpg?s=612x612&w=0&k=20&c=kkcNg4OCoKt5mTmI48pQBhAW6cx0S2L1S232igbZrHI=",
      botao: <Botao />,
    },
  ];

  return (
    <>
      {PageContent.map((content, index) => (
        <div className="overflow-y-hidden flex" key={index}>
          {/* Div Para sideBar */}
          <div>
            <Sidebar />
          </div>
          {/* Div para content */}
          <div className="flex justify-center items-center flex-col relative w-full">
            {/* Título da página */}
            <p className="font-bold text-lightGreen text-4xl top-5 absolute">
              {content.title}
            </p>
            <p className="font-semibold text-gray text-2xl top-20 absolute text-center">
              {content.subTitle}
            </p>
            <img src={content.img} alt="imagem Default Cadastrar Doaçao" />
            <div className="">{content.botao}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default cadastroDefault;
