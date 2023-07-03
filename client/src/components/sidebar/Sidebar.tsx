import React, { useContext, useEffect, useState } from "react";
import Router from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "@/contexts/AuthContext";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const { nome, signOut, isAuth, cargo } = useContext(AuthContext);

  useEffect(() => {}, []);

  const sidebarWidth = open ? "w-72" : "w-20";
  const sidebarContentClass = `bg-lightGreen h-screen p-5 pt-8 duration-300 relative ${sidebarWidth}`;
  const sidebarArrowIconClass = `${open ? "rotate-180" : ""} bg-white text-lightGreen text-xl rounded-full absolute -right-3 top-9 border border-lightGreen cursor-pointer p-1 duration-200`;
  const sidebarNameClass = `${!open ? "scale-0" : ""} text-white origin-left font-medium text-2xl duration-300 ml-2`;
  const searchInputClass = `${!open ? "hidden" : ""} text-base bg-transparent w-full text-white focus:outline-none border-none placeholder-white`;

  return (
    <div className="flex">
      <div className={sidebarContentClass}>
        <FontAwesomeIcon
          icon={faArrowRight}
          className={sidebarArrowIconClass}
          onClick={() => setOpen(!open)}
        />

        <div className="inline-flex duration-200">
          <FontAwesomeIcon
            icon={faHouse}
            className={`${open && "rotate-[360deg]"} text-3xl rounded cursor-pointer block float-left mr-2 duration-500 text-white`}
          />
          <h1 className={sidebarNameClass}>olá, {nome}.</h1>
        </div>

        <div className={`${!open ? "px-2.5" : "px-4"} py-2 my-5 flex items-center rounded-md bg-darkGreen`}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={`${open && "mr-2"} text-white text-lg block float-left cursor-pointer`}
          />
          <input type="search" placeholder="Pesquisar..." className={searchInputClass} />
        </div>

        <ul className="pt-2">
          <SidebarItem
            onClick={() => Router.push("/")}
            label="Resumo"
            className={`${!open && "hidden"}`}
          >
            <FontAwesomeIcon icon={faGauge} />
          </SidebarItem>
          <SidebarItem
            onClick={() => Router.push("/")}
            label="Hortas"
            className={`${!open && "hidden"}`}
          >
            <FontAwesomeIcon icon={faTree} />
          </SidebarItem>
          <SidebarItem
            onClick={() => Router.push("/pessoas/principal")}
            label="Pessoas"
            className={`${!open && "hidden"}`}
          >
            <FontAwesomeIcon icon={faPeopleGroup} />
          </SidebarItem>
          <SidebarItem
            onClick={() => Router.push("/doacao/principal")}
            label="Doações"
            className={`${!open && "hidden"}`}
          >
            <FontAwesomeIcon icon={faBoxArchive} />
          </SidebarItem>
          <SidebarItem
            onClick={() => Router.push("/")}
            label="Projetos"
            className={`${!open && "hidden"}`}
          >
            <FontAwesomeIcon icon={faDiagramProject} />
          </SidebarItem>
          <SidebarItem
            onClick={() => Router.push("/")}
            label="Usuários"
            className={`${!open && "hidden"}`}
          >
            <FontAwesomeIcon icon={faUser} />
          </SidebarItem>
          {cargo === "Administrador" && (
            <SidebarItem
              onClick={() => Router.push("/")}
              label="Registros"
              className={`${!open && "hidden"}`}
            >
              <FontAwesomeIcon icon={faAddressCard} />
            </SidebarItem>
          )}
        </ul>

        <div className="bottom-0 flex fixed">
          <div>
            <span
              onClick={signOut}
              className="mt-9 mb-4 text-white flex items-center gap-x-4 curson-pointer p-2 hover:bg-darkGreen rounded-md text-xl font-medium flex-1 duration-200"
            >
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
