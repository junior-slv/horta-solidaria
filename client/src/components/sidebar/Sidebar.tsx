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
} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "@/contexts/AuthContext";
import SideBarItem from "./SidebarItem";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const router = useRouter();
  const { nome, signOut, isAuth, cargo } = useContext(AuthContext);


    const FirstName = nome.split(' ')[0];

  useEffect(() => {}, []);

  return (
    <aside className="w-72 bg-lightGreen min-h-full justify-between h-screen flex flex-col items-center pt-5 pb-2 space-y-7 absolute bottom-0 left-0">
      <div className="w-full flex flex-col gap-y-1 text-gray-500 fill-gray-500 text-md ">
        <div className="bg-darkGreen text-off-white">
        <div className="font-poppins pl-4 text-lg uppercase">
          Olá, {FirstName}.
        </div>
        <div className="font-poppins pl-4 text-2xl uppercase">
          Menu
        </div>
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
      </div>
      <div className="w-full flex flex-col gap-y-1 text-gray-500 fill-gray-500 text-md">
        <div className="font-poppins pl-4 text-off-white text-2xl uppercase flex bg-darkGreen">
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
    </aside>
  );
};

export default Sidebar;
