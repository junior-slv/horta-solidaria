import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Botao } from "../../components/buttons/Botao";
import Router from "next/router";

function Cabecalho() {
  return (
    <>
      <div className="mb-[60px] gap-y-4 md:gap-y-0 grid grid-cols-1 md:grid-cols-4 w-auto md:w-full items-center">
        {/* Botão de filtro */}
        <div>
          <button className="text-black bg-white text-xl px-[15px] py-2 rounded-[20px] shadow font-semibold">
            <FontAwesomeIcon icon={faFilter} /> Filtrar
          </button>
        </div>
        {/*Botão Adicionar Doação  */}
        <div className="md:-ml-28">
          <Botao
            onClick={() => Router.push("/doacao/formulario")}
            className="rounded-[20px] bg-lightGreen hover:bg-darkGreen"
          >       
            <span className="text-xl">+</span> Adicionar Doação
          </Botao>
        </div>
        {/* Colunas selecionadas */}
        <div className="md:-ml-36">
          <p>1 Linha selecioanada</p>
        </div>
        {/* Pesquisar */}
        <div
          className={`py-3 px-4 rounded-lg flex items-center bg-white gap-8`}
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={`mr-2 text-black text-lg cursor-pointer`}
          />
          <input
            type={"search"}
            placeholder="Pesquisar..."
            className={`text-black bg-transparent focus:outline-none placeholder-black`}
          />
        </div>
      </div>
    </>
  );
}

export default Cabecalho;
