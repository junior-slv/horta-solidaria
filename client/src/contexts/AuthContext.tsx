import axios from "axios";
import { setCookie } from "nookies";

import { createContext, useState } from "react";
const baseURL = "http://localhost:3001/api/usuario/logar";
type AuthContextType = {
  isAuth: boolean;
};
type SignInData = {
  login: string;
  password: string;
  token: string,
};
export const AuthContext = createContext({} as AuthContextType);

export async function signIn({ login, password }: SignInData) {

}

export function AuthProvider({ children }: any) {
  const isAuth = false;

  return (
    <AuthContext.Provider value={{ isAuth }}>{children}</AuthContext.Provider>
  );
}
