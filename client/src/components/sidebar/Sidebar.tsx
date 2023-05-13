// Imports para o componente
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //importação do componente
import {
  faArrowRightToBracket,
  faHouse,
  faMagnifyingGlass,
  faArrowRight,
  faGauge,
  faTree,
  faDiagramProject,
  faBoxArchive,
  faPeopleGroup,
  faUser,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons"; // importação do icone individual
import React, { useState } from "react";
import Router from "next/router";
import SidebarItem from "./SidebarItem";
// componente SideBar
const Sidebar = () => {
  //varíavel para armazenar o estado atual da side bar
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  //Componente
  return (
    // Side Bar
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } bg-lightGreen h-screen p-5 pt-8 duration-300 relative`}
      >
        {/* Recolher icone */}
        <FontAwesomeIcon
          icon={faArrowRight}
          className={`${
            open && "rotate-180"
          } bg-white text-lightGreen text-xl rounded-full absolute -right-3 top-9 border border-lightGreen cursor-pointer p-1 duration-200`}
          onClick={() => setOpen(!open)}
        />
        {/* Links */}
        {/* fist item */}
        <div className="inline-flex duration-200">
          <FontAwesomeIcon
            icon={faHouse}
            className={`${
              open && "rotate-[360deg]"
            } text-3xl rounded cursor-pointer block float-left mr-2 duration 500 text-white`}
          />
          <h1
            className={`${
              !open && "scale-0"
            } text-white origin-left font-medium text-2xl duration-300 ml-2`}
          >
            Olá, Junior.
          </h1>
        </div>

        {/* Search Item */}
        <div
          className={`${
            !open ? "px-2.5" : "px-4"
          } py-2 my-5 flex items-center rounded-md bg-darkGreen`}
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={`${
              open && "mr-2"
            } text-white text-lg block float-left cursor-pointer`}
          />
          <input
            type={"search"}
            placeholder="Pesquisar..."
            className={`${
              !open && "hidden"
            } text-base bg-transparent w-full text-white focus:outline-none border-none placeholder-white`}
          />
        </div>
        {/* All itens */}
        <ul className="pt-2">
          <SidebarItem onClick={() => Router.push("/")} label="Resumo" children={<FontAwesomeIcon icon={faGauge} />} className={`${!open && "hidden"}`}/>
          <SidebarItem onClick={() => Router.push("/")} label="Hortas" children={<FontAwesomeIcon icon={faTree} />} className={`${!open && "hidden"}`}/>
          <SidebarItem onClick={() => Router.push("/pessoas/principal")} label="Pessoas" children={<FontAwesomeIcon icon={faPeopleGroup} />} className={`${!open && "hidden"}`}/>
          <SidebarItem onClick={() => Router.push("/doacao/principal")} label="Doações" children={<FontAwesomeIcon icon={faBoxArchive} />} className={`${!open && "hidden"}`}/>
          <SidebarItem onClick={() => Router.push("/")} label="Projetos" children={<FontAwesomeIcon icon={faDiagramProject} />} className={`${!open && "hidden"}`}/>
          <SidebarItem onClick={() => Router.push("/")} label="Usuários" children={<FontAwesomeIcon icon={faUser} />} className={`${!open && "hidden"}`}/>
          <SidebarItem onClick={() => Router.push("/")} label="Registros" children={<FontAwesomeIcon icon={faAddressCard} />} className={`${!open && "hidden"}`}/>
        </ul>
        <div className="bottom-0 flex fixed">
          <div>
            <span onClick={() => Router.push("/")} className=" mt-9 mb-4 text-white flex items-center gap-x-4 curson-pointer p-2 hover:bg-darkGreen rounded-md text-xl font-medium flex-1 duration-200">
              <FontAwesomeIcon icon={faArrowRightToBracket} />
              <span className={`${!open && "hidden"}`}>Sair</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
