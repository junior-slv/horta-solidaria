import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
    className?: string;
    type?: "submit" | "reset" | "button";
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export const Botao = ({ children, className, onClick, type }: ButtonProps) => {
    return (
      <button
        onClick={onClick}
        className={`text-lg px-[20px] py-2 rounded text-white shadow font-semibold ${className ? `${className} ` : ''}`}
        type={type}
      >
        {children}
      </button>
    );
  };
  

