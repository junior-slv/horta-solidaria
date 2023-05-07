import React from "react";

type InputProps = {
    type?: string;
    placeholder?: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };

const FormInput = ({type, placeholder, onChange}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      required
      className={` h-[60px] font-semibold text-base bg-transparent w-full text-darkGrey focus:outline-none border-none placeholder-darkGrey`}
    />
  );
};

export default FormInput;
