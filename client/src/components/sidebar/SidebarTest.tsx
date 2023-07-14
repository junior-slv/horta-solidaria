import React, { useContext, useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import {
  faHome,
  faUser,
  faCog,
  faSignOutAlt,
  faPersonWalking,
  faLineChart,
  faFileCsv,
  faFileLines,
  faBars,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "@/contexts/AuthContext";
import SideBarItem from "./SidebarItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarTest = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { nome, signOut, isAuth, cargo } = useContext(AuthContext);

  const FirstName = nome.split(" ")[0];

  useEffect(() => {}, []);

  return (
    <aside
      className={`bg-lightGreen  text-white top-0 flex flex-col w-full overflow-clip ${
        open ? "h-screen fixed" : "h-20 sticky"
      } transition-all duration-500 ease-in-out z-50`}
    >
      <div className="flex justify-start p-6 pl-8">
        <button onClick={() => setOpen(!open)}>
          <FontAwesomeIcon icon={faBars} className="text-[1.9rem]" />
        </button>
      </div>
      <div className={`w-full flex flex-col gap-y-2 text-gray-500 fill-gray-500 text-md ${open ? "" : "hidden"}`}>
        <div className="bg-darkGreen h-[5.7rem] text-off-white">
          <div className="font-poppins pl-7 text-[1.9rem] pb-1 pt-1 up font-bold">
            Olá, {FirstName}.
          </div>
          <div className="font-poppins font-bold pl-7 text-2xl uppercase">Menu</div>
        </div>
        <SideBarItem
          icon={faLineChart}
          onClick={() => {
            router.push("/resumo/resumo");
          }}
          text="Resumo"
        />
        <SideBarItem
          icon={faPersonWalking}
          onClick={() => {
            router.push("/pessoas/principal");
          }}
          text="Pessoas"
        />
        <SideBarItem icon={faCog} onClick={() => {}} text="Configurações" />
        {cargo === "Administrador" && (
          <SideBarItem
            onClick={() => router.push("/registros/todos")}
            text="Registros"
            icon={faFileLines}
          />
        )}
        <div className="w-full flex flex-col gap-y-2 text-gray-500 fill-gray-500 text-md">
          <div className="h-10 font-poppins font-bold pt-1 pl-7 text-off-white text-2xl uppercase flex bg-darkGreen">
            <p>Perfil</p>
          </div>
          <SideBarItem
            icon={faUser}
            onClick={() => {}}
            text="Visualizar perfil"
          />
          <SideBarItem
            icon={faSignOutAlt}
            onClick={() => {
              signOut();
            }}
            text="Sair"
          />
        </div>
      </div>
    </aside>
  );
};

export default SidebarTest;
