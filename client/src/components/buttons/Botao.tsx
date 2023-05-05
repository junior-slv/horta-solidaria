import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export const Botao = ({children, className, onClick}:ButtonProps) => {
    return (
        <button onClick={onClick} className={`${className} text-xl px-[30px] py-2 rounded text-white shadow font-semibold mt-8`}>
            {children}
        </button>
    );
  };

