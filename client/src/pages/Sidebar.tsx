import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //importação do componente
import {
  faArrowRightFromBracket,
  faHouse,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons"; // importação do icone individual

const Sidebar = () => {
  return (
    <div className="body h-screen w-screen bg-white">
      <nav className="sideBar fixed h-full top-0 left-0 w-64 px-3.5 py-3.5 z-50 bg-beige duration-300 block">
        {/* header section */}
        <header className="relative">
          <div className="image-text flex items-center justify-center text-white">
            <div className="text flex flex-col text-lightGreen text-base font-medium whitespace-nowrap opacity-100">
              <span className="text-3xl font-semibold">Dashboard</span>
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
                  <input className="h-full w-full outline-none border-none bg-primary-color-light text-text-color rounded-md text-base font-medium transition duration-500 ease-in-out p-0" type="text" placeholder="Search" />
            </li>
            {/* navlinks */}
            <ul className="navlinks block list-disc my-4 mx-0">
              <li className="navLink h-12 list-none flex items-center mt-2">
                <a href="#" className="list-none h-full bg-transparent flex items-center w-full transition duration-300 ease-in-out">
                  <span className="flex mx-3">
                    <FontAwesomeIcon icon={faHouse} />
                  </span>
                  <span className="text-base font-medium whitespace-nowrap opacity-100">
                    DashBoard
                  </span>
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
                <span className="text-base font-medium whitespace-nowrap opacity-100">
                  LogOut
                </span>
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
