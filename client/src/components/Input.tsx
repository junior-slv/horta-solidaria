import React from "react";

type InputProps = {
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ type, onChange }: InputProps) => {
  return (
    <input
      type={type || "text"}
      onChange={onChange}
      className="w-full bg-white border border-gray focus:border-lightGreen rounded px-3 py-3 text-lg text-black placeholder-black focus:outline-none transition duration-200 ease-in-out"
    />
  );
};

export default Input;