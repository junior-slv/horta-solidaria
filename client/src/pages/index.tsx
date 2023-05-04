import React, { useState } from "react";
import axios from "axios";
import { signIn } from "@/services/api";
import LoadingAnimation from "@/components/LoadingAnimation";
import Input from "@/components/Input";
import ShowPassword, { HidePassword } from "@/components/ShowPassword";
import LargeButton from "@/components/LargeButton";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [login, setLogin] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);

  const sendLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    signIn(login, password);
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
          <Input onChange={(e) => setLogin(e.target.value)} />
        </div>

        <div className="relative">
          <label
            htmlFor="password"
            className="block font-bold text-xl mb-1 text-lightGreen select-none"
          >
            Senha
          </label>

          <Input
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPassword ? (
            <ShowPassword onClick={() => setShowPassword(!showPassword)} />
          ) : (
            <HidePassword onClick={() => setShowPassword(!showPassword)} />
          )}
        </div>

        <div className="relative top-[22px]">
            <LargeButton onClick={sendLogin}>Enviar</LargeButton>
          <div
            className={`flex itemns-center justify-center ${
              loading ? "flex" : "hidden"
            }`}
          >
            <LoadingAnimation />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
