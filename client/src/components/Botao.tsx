import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
}
export const Botao = ({children}:ButtonProps) => {
    return (
        <button className="text-xl bg-lightGreen px-5 py-2 rounded text-white shadow hover:bg-darkGreen font-semibold mt-8">
            {children}
        </button>
    );
  };

