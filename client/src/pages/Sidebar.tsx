import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //importação do componente
import {
  faArrowRightFromBracket,
  faHouse,
  faMagnifyingGlass,
  faBars,
} from "@fortawesome/free-solid-svg-icons"; // importação do icone individual
import React, { useState } from 'react';



const Sidebar = () => {

  const [width, setWidth] = useState('w-20'); // Define a largura inicial como 64 (250px)

  const [isVisible, setIsVisible] = useState(false); // Define o estado inicial como visível


  const handleButtonClick = () => {
    if (width === 'w-64') {
      setWidth('w-20'); // Alterna para 64 (250px) se a largura for 20 (80px)
      setIsVisible(false); // Define o estado como invisível quando o botão é clicado
    } else {
      setWidth('w-64'); // Alterna para 20 (80px) se a largura for diferente de 20 (80px)
      setIsVisible(true); // Define o estado como invisível quando o botão é clicado
    }
  };


  return (
    <div className="body h-screen w-screen bg-white">
      <nav className={`fixed h-full top-0 left-0 ${width} px-3.5 py-3.5 z-50 bg-beige duration-300 block`}>
      <FontAwesomeIcon icon={faBars} onClick={handleButtonClick}/> 
              {/* header section */}
        <header className="relative">
          <div className="image-text flex items-center justify-center text-white">
            <div className="text flex flex-col text-lightGreen text-base font-medium whitespace-nowrap opacity-100">
              {isVisible && (
              <span className="text-3xl font-semibold">Dashboard</span>
              )}
            </div>
          </div>
        </header>
        {/* body navbar section */}
        <div className="menuBar h-full pb-14 flex flex-col justify-between">
          {/* content navBar section */}
          <div className="menu mt-10">
            <li className="rounded-md bg-primary-color-light cursor-pointer transition duration-500 ease-in-out h-16 list-none flex items-center mt-4 p-0">
                  <span className="flex mx-3 p-0">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </span>
                  {isVisible && (
                  <input className="h-full w-full outline-none border-none bg-primary-color-light text-text-color rounded-md text-base font-medium transition duration-500 ease-in-out p-0" type="text" placeholder="Search" />
                  )}
                  </li>
            {/* navlinks */}
            <ul className="navlinks block list-disc my-4 mx-0">
              <li className="navLink h-12 list-none flex items-center mt-2">
                <a href="#" className="list-none h-full bg-transparent flex items-center w-full transition duration-300 ease-in-out">
                  <span className="flex mx-3">
                    <FontAwesomeIcon icon={faHouse} />
                  </span>
                  {isVisible && (
                  <span className="text-base font-medium whitespace-nowrap opacity-100">
                    DashBoard
                  </span>
                  )}
                </a>
              </li>
            </ul>
          </div>
          {/* bottom navbar section */}
          <div className="bottomNavBar flex">
            <li className="h-50 list-none flex items-center mt-10">
              <a
                href="#"
                className="list-none h-full bg-transparent flex items-center w-full rounded-md no-underline transition duration-300"
              >
                <span className="flex mx-3">
                  <FontAwesomeIcon icon={faArrowRightFromBracket} />
                </span>
                {isVisible && (
                <span className="text-base font-medium whitespace-nowrap opacity-100">
                  LogOut
                </span>
                )}
              </a>
            </li>
          </div>
        </div>
      </nav>
      {/* Sessão para conteúdo da página */}
      <div>
        <section className="home absolute h-screen	top-0 left-64 ">
          <div className="text-3xl font-medium text-lightGreen px-16 py-3.5 duration-300">
            SideBar
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sidebar;
