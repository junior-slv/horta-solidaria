import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const LargeButton = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="w-full text-lg bg-darkGreen hover:bg-lightGreen px-6 py-3 rounded text-white shadow transition duration-200 ease-in-out select-none"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default LargeButton;
