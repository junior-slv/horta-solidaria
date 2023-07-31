import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { parseCookies, destroyCookie, setCookie } from "nookies";
import { useRouter } from "next/router";

import { instance } from "@/services/api";


type AuthContextType = {
  nome: string;
  isAuth: boolean;
  cargo: string;
  usuario_id: number | null;
  signIn: (data: SignInData) => Promise<void>;
  signOut: () => void;
};

export type SignInData = {
  login: string;
  password: string;
  lembrarSenha: boolean;
  token: string;
};
export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: any) {
  const [isAuth, setIsAuth] = useState(false);
  const [nome, setNome] = useState<string>("");
  const [usuario_id, setUsuarioId] = useState<number | null>(null);
  const [cargo, setCargo] = useState<string>("");
  const [lembrarSenha, setLembrarSenha] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const { token } = parseCookies();

    // Recupera os valores armazenados em cookies
    const storedNome = localStorage.getItem("nome");
    const storedCargo = localStorage.getItem("cargo");
    const storedUsuarioId = localStorage.getItem("usuario_id");

    setIsAuth(!!token);

    // Define os valores iniciais com base nos cookies
    if (token && storedNome && storedCargo && storedUsuarioId) {
      setNome(storedNome);
      setCargo(storedCargo);
      setUsuarioId(Number(storedUsuarioId));
    }
  }, []);

  const signIn = async (data: SignInData) => {
    try {
      const { login, password, lembrarSenha } = data;
      const res = await instance.post(
        "auth/logar",
        {
          login,
          senha: password,
        },
      );
      
      const { auth, token, nome, cargo, usuario_id } = res.data;


      if (auth) {
        setNome(nome);
        setCargo(cargo);
        setIsAuth(true);
        setUsuarioId(usuario_id);

        // Armazena os valores em cookies
        setCookie(null, "token", token, {
          maxAge: 30 * 24 * 60 * 60, // 30 dias
          path: "/",
        });
        localStorage.setItem("nome", nome);
        localStorage.setItem("cargo", cargo);
        localStorage.setItem("usuario_id", String(usuario_id));
        localStorage.setItem("access_token", token);


        setLembrarSenha(lembrarSenha);

        router.push("/resumo/resumo");
      } else {
        console.error("Autenticação falhou");
      }
    } catch (err) {
      console.error("Erro: " + err);
    }
  };

  const signOut = () => {
    destroyCookie(null, "token");

    // Remove os valores dos cookies e do localStorage
    localStorage.removeItem("nome");
    localStorage.removeItem("cargo");
    localStorage.removeItem("usuario_id");

    setIsAuth(false);
    router.push("/");
  };

  return (
    <AuthContext.Provider
      value={{ isAuth, signIn, signOut, nome, cargo, usuario_id }}
    >
      {children}
    </AuthContext.Provider>
  );
}
