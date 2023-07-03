import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useEffect, useState } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import { Botao } from "../../components/buttons/Botao";
import { useRouter } from "next/router";
import { AuthContext } from "@/contexts/AuthContext";
import Tabela from "./tabela";
import { fetchPessoas } from "@/services/api";

const PessoasMain = () => {
  const { isAuth } = useContext(AuthContext);
  const [dados, setDados] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetchPessoas().then((data) => {
      setDados(data.reverse());
    });
  }, []);

  const handleFilterClick = () => {
    // Lógica para abrir o filtro
  };

  const handleAddPessoaClick = () => {
    router.push("/pessoas/formulario");
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Lógica para pesquisar
  };


  return (
    <div className="overflow-y-hidden flex bg-beige">
      {/* Div Para sideBar */}
      <Sidebar />
      {/* Div para content */}
      <div className="flex justify-between items-center flex-col relative w-full">
        <div>
          {/* Título da página */}
          <p className="font-bold text-lightGreen text-4xl left-14 top-5 absolute">
            Pessoas
          </p>
          {/* Menus */}
          <ul className="list-none m-0 p-0">
            <li className="inline-block">
              <button
                className="absolute top-[80px] left-[40px]  bg-lightGreen text-white text-xl px-[15px] py-2 rounded shadow font-semibold mt-8"
                onClick={handleFilterClick}
              >
                <FontAwesomeIcon icon={faFilter} /> Filtrar
              </button>
            </li>
            <li className="inline-block absolute top-[80px] left-[180px]">
              <Botao
                onClick={handleAddPessoaClick}
                className="bg-lightGreen hover:bg-darkGreen"
              >
                <span className="text-2xl">+</span> Adicionar Pessoa
              </Botao>
            </li>
            <li className="inline-block absolute top-[125px] left-[450px]">
              <p>1 Linha selecionada</p>
            </li>
            <li className="inline-block bg-white rounded">
              <div className="absolute top-[100px] right-[40px] py-3 px-4 rounded-lg my-2 flex items-center bg-white">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="mr-2 text-black text-lg block float-left cursor-pointer"
                />
                <input
                  type="search"
                  placeholder="Pesquisar..."
                  className="text-base bg-transparent w-full text-white focus:outline-none border-none placeholder-black"
                  onChange={handleSearch}
                />
              </div>
            </li>
          </ul>
        </div>
        <Tabela dados={dados} />
      </div>
    </div>
  );
};

export default PessoasMain;
