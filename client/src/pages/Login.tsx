import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faSearch } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-screen h-screen font-poppins flex items-stretch items-centes justify-center bg-darkGreen">
      <form className="bg-beige shadow-md rounded-md p-9 space-y-5 w-[32rem] h-[24rem] self-center block">
        <div>
          <label
            htmlFor="user"
            className="block font-bold text-xl mb-1 text-lightGreen select-none"
          >
            Usuário
          </label>
          <input
            type="text"
            className="w-full bg-white border border-gray focus:border-lightGreen rounded px-3 py-3 text-lg text-black placeholder-black focus:outline-none transition duration-200 ease-in-out"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block font-bold text-xl mb-1 text-lightGreen select-none"
          >
            Senha
          </label>
          <input
            type={showPassword ? "text" : "password"}
            className="w-full bg-white border border-gray focus:border-lightGreen rounded px-3 py-3 text-lg text-black placeholder-black focus:outline-none transition duration-200 ease-in-out"
          />
        </div>

        <div className="text-right transition duration-200 ease-in-out flex justify-between">
          <div className="hidden text-red transition duration-200 ease-in-out select-none text-lg italic">
            Usuário ou senha incorreto.
          </div>
          {showPassword ? (
            <div
              className="text-black text-base cursor-pointer transition duration-200 ease-in-out select-none hover:text-darkGreen italic"
              onClick={() => setShowPassword(!showPassword)}
            >
              Ocultar Senha{" "}
              <FontAwesomeIcon className="text-lg" icon={faEyeSlash} />{" "}
            </div>
          ) : (
            <div
              className="text-black text-base cursor-pointer transition duration-200 ease-in-out select-none hover:text-darkGreen italic"
              onClick={() => setShowPassword(!showPassword)}
            >
              Mostrar Senha <FontAwesomeIcon className="text-lg" icon={faEye} />
            </div>
          )}
        </div>

        <div>
          <button className="w-full text-lg bg-darkGreen hover:bg-lightGreen px-6 py-3 rounded text-white shadow transition duration-200 ease-in-out select-none">
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
