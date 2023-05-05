import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
    className?: string;
}
export const Botao = ({children, className}:ButtonProps) => {
    return (
        <button className={`${className} text-xl px-[30px] py-2 rounded text-white shadow font-semibold mt-8`}>
            {children}
        </button>
    );
  };

