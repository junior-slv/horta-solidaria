import React, { useContext, useEffect, useState } from "react";
import { z } from "zod";
import { AuthContext } from "@/contexts/AuthContext";
import LoadingAnimation from "@/components/loadings/LoadingAnimation";
import Input from "@/components/inputs/Input";
import ShowPassword, { HidePassword } from "@/components/ShowPassword";
import { Botao } from "@/components/buttons/Botao";
import Router from "next/router";

const LoginSchema = z.object({
  login: z.string(),
  password: z.string(),
  lembrarSenha: z.boolean(),
});

type LoginData = z.infer<typeof LoginSchema>;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [lembrarSenha, setLembrarSenha] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { signIn, isAuth } = useContext(AuthContext);

  useEffect(() => {
    if (isAuth) {
      // Se o usuário já estiver autenticado, redireciona para a página principal
      Router.push("/resumo/resumo");
    }
  }, [isAuth]);

  const sendLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const data: LoginData = {
        login,
        password,
        lembrarSenha,
      };

      await LoginSchema.parseAsync(data);
      await signIn(data);
    } catch (err) {
      console.log("Error: ", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen font-poppins flex items-stretch items-centes justify-center bg-darkGreen">
      <div className="flex items-center justify-center">
        <img src="/images/horta4.png" alt="" />
      </div>
      <form
        className="p-12 space-y-5 w-[32rem] h-[24rem] self-center block"
        onSubmit={sendLogin}
      >
        <div className="flex items-center justify-center text-beige text-2xl font-bold">
          <p>Acesse sua conta</p>
        </div>
        <div>
          <label
            htmlFor="user"
            className="block text-xl mb-1 text-beige select-none"
          >
            Usuário
          </label>
          <Input value={login} onChange={(e) => setLogin(e.target.value)} />
        </div>

        <div className="relative">
          <label
            htmlFor="password"
            className="block text-xl mb-1 text-beige select-none"
          >
            Senha
          </label>

          <Input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPassword ? (
            <ShowPassword onClick={() => setShowPassword(!showPassword)} />
          ) : (
            <HidePassword onClick={() => setShowPassword(!showPassword)} />
          )}
        </div>

        <div className="flex justify-between relative top-[22px]">
          <span className="flex justify-center items-center text-lg text-beige">
            <p>Lembrar senha</p>
            <input
              className="m-2 h-6 w-6 text-lightGreen"
              type="checkbox"
              name=""
              id=""
              checked={lembrarSenha}
              onChange={(e) => setLembrarSenha(e.target.checked)}
            />
          </span>
          <Botao type="submit">Enviar</Botao>
        </div>
        <div className="flex items-center justify-center">
          {loading ? <LoadingAnimation /> : <div></div>}
        </div>
      </form>
    </div>
  );
};

export default Login;
