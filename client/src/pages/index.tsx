import React, { useContext, useState } from "react";
import { z, ZodObject, ZodString } from "zod";
import { AuthContext, SignInData } from "@/contexts/AuthContext";
import LoadingAnimation from "@/components/loadings/LoadingAnimation";
import Input from "@/components/inputs/Input";
import ShowPassword, { HidePassword } from "@/components/ShowPassword";
import LargeButton from "@/components/buttons/LargeButton";
import Toast from "./Toast";
import Torrada from "@/components/toast/Toast";

const LoginSchema = z.object({
  login: z.string(),
  password: z.string(),
});

type LoginData = z.infer<typeof LoginSchema>;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { signIn } = useContext(AuthContext);

  const sendLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const data: LoginData = {
        login,
        password,
      };

      await LoginSchema.parseAsync(data);
      signIn(data);
      // Faça o que precisa ser feito em caso de sucesso

    } catch (err) {
      console.log("Error: ", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen font-poppins flex items-stretch items-centes justify-center bg-darkGreen">
      <form
        className="bg-beige shadow-md rounded-md p-12 space-y-5 w-[32rem] h-[24rem] self-center block"
        onSubmit={sendLogin}
      >
        <div>
          <label
            htmlFor="user"
            className="block font-bold text-xl mb-1 text-lightGreen select-none"
          >
            Usuário
          </label>
          <Input
            value={login}
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

        <div className="relative top-[22px]">
          <LargeButton type="submit">Enviar</LargeButton>
          <div>{loading ? <LoadingAnimation /> : <div></div>}</div>
        </div>
        <Torrada/>
      </form>
    </div>
  );
};

export default Login;
