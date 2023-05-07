import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { parseCookies, destroyCookie, setCookie } from "nookies";
import { useRouter } from "next/router";

const baseURL = "http://localhost:3001/api/usuario";

type AuthContextType = {
  isAuth: boolean;
  signIn: (data: SignInData) => Promise<void>;
  signOut: () => void;
};

export type SignInData = {
  login: string;
  password: string;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: any) {
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const { token } = parseCookies();
    setIsAuth(!!token);
  }, []);

  const signIn = async (data: SignInData) => {
    try {
      const { login, password } = data;
      const res = await axios.post(`${baseURL}/logar`, {
        login,
        senha: password,
      });

      const { auth, token } = res.data;

      if (auth) {
        setCookie(null, "token", token, {
          maxAge: 60 * 60 * 1, // 1 hora
          path: "/",
        });
        setIsAuth(true);
        router.push("/resumo/resumo"); // Rota para redirecionar após o login
      } else {
        console.error("Autenticação falhou");
      }
    } catch (err) {
      console.error("Erro: " + err);
    }
  };

  const signOut = () => {
    destroyCookie(null, "token");
    setIsAuth(false);
    router.push("/"); // Rota para redirecionar após o logout
  };

  return (
    <AuthContext.Provider value={{ isAuth, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

