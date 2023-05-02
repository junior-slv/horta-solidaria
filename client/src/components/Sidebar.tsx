// Imports para o componente
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //importação do componente
import {
  faArrowRightToBracket,
  faHouse,
  faMagnifyingGlass,
  faBars,
  faArrowRight,
  faChevronDown,
  faGauge,
  faGear,
  faTree,
  faDiagramProject,
} from "@fortawesome/free-solid-svg-icons"; // importação do icone individual
import React, { useState } from "react";

// componente SideBar
const Sidebar = () => {
  //varíavel para armazenar o estado atual da side bar
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  // Objeto para armazenar itens do menu
  const Menus = [
    { title: "DashBoard", icon: <FontAwesomeIcon icon={faGauge} /> },
    { title: "Configurações", icon: <FontAwesomeIcon icon={faGear} /> },
    { title: "Hortas", icon: <FontAwesomeIcon icon={faTree} />, spacing: true },
    {
      title: "Projetos",
      icon: <FontAwesomeIcon icon={faDiagramProject} />,
      submenu: true,
      subMenuItens: [{ title: "Projeto1" }, { title: "Projeto2" }],
    },
    {
      title: "SignOut",
      icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
    },
  ];

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
            !open && "rotate-180"
          } bg-white text-lightGreen text-xl rounded-full absolute -right-3 top-9 border border-lightGreen cursor-pointer p-1`}
          onClick={() => setOpen(!open)}
        />
        {/* Links */}
        {/* fist item */}
        <div className="inline-flex">
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
            DashBoard
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
            } text-base bg-beige w-full text-lightGreen focus:outline-none border-none`}
          />
        </div>
        {/* All itens */}
        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <>
              <li
                key={index}
                // essa variavel menu spacing futuramente será utilizada para separar os menus
                className={`${
                  menu.spacing ? "mt-9" : "mt-2"
                } text-white text-sm flex items-center gap-x-4 curson-pointer p-2 hover:bg-darkGreen rounded-md`}
              >
                <span className="text-2xl block float-left">
                  {menu.icon ? menu.icon : <FontAwesomeIcon icon={faBars} />}
                </span>
                <span
                  className={`${
                    !open && "hidden"
                  } text-lg font-medium flex-1 duration-200`}
                >
                  {menu.title}
                </span>
                {/* variável que será utilizada para subitens dentro do menu */}
                <span>
                  {menu.submenu && open && (
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`${subMenuOpen && "rotate-180 duration-200"}`}
                      onClick={() => setSubMenuOpen(!subMenuOpen)}
                    />
                  )}
                </span>
              </li>

              {/* SubMenus Show */}
              {menu.submenu && subMenuOpen && open && (
                <ul>
                  {menu.subMenuItens.map((subMenuItem, index) => (
                    <li
                      key={index}
                      className="text-white text-sm flex items-center gap-x-4 curson-pointer p-2 hover:bg-darkGreen rounded-md p-2 px-5 duration-300"
                    >
                      {subMenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
