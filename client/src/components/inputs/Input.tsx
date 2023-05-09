import React from "react";

type InputProps = {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: any; // Adicionado o tipo para a propriedade error
};

const Input = ({ type, placeholder, value, onChange, error }: InputProps) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full bg-white border ${
          error ? "border-red" : "border-gray"
        } focus:border-lightGreen rounded px-3 py-3 text-lg text-black placeholder-black focus:outline-none transition duration-200 ease-in-out`}
      />
      {error && <p className="text-red">Erro: {error}</p>}
    </div>
  );
};

export default Input;
