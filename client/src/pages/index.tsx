import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const baseURL = "http://localhost:3001/api/usuario/logar";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [login, setLogin] = useState<string>();
  const [password, setPassword] = useState<string>();

  const sendLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Impede o comportamento padrão do navegador
    axios
      .post(baseURL, {
        login: `${login}`,
        senha: `${password}`,
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="w-screen h-screen font-poppins flex items-stretch items-centes justify-center bg-darkGreen">
      <form className="bg-beige shadow-md rounded-md p-12 space-y-5 w-[32rem] h-[24rem] self-center block">
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
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>

        <div className="relative">
          <label
            htmlFor="password"
            className="block font-bold text-xl mb-1 text-lightGreen select-none"
          >
            Senha
          </label>

          <input
            type={showPassword ? "text" : "password"}
            className="relative w-full bg-white border border-gray focus:border-lightGreen rounded px-3 py-3 text-lg text-black placeholder-black focus:outline-none transition duration-200 ease-in-out"
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPassword ? (
            <div
              className="text-black text-base cursor-pointer transition duration-200 ease-in-out select-none hover:text-darkGreen italic"
              onClick={() => setShowPassword(!showPassword)}
            >
              <FontAwesomeIcon
                className="absolute right-2 top-[50px] text-xl cursor-pointer"
                icon={faEyeSlash}
              />{" "}
            </div>
          ) : (
            <div
              className="text-black text-base cursor-pointer transition duration-200 ease-in-out select-none hover:text-darkGreen italic"
              onClick={() => setShowPassword(!showPassword)}
            >
              <FontAwesomeIcon
                className="absolute right-2 top-[50px] text-xl cursor-pointer"
                icon={faEye}
              />
            </div>
          )}
        </div>

        <div className="relative top-[22px]">
          <button
            className="w-full text-lg bg-darkGreen hover:bg-lightGreen px-6 py-3 rounded text-white shadow transition duration-200 ease-in-out select-none"
            onClick={sendLogin}
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
