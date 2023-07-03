import React, { ReactNode } from "react";

interface FormRowProps {
  label: ReactNode;
  children: ReactNode;
  className?: string;
}

const FormRow = ({ label, children, className }: FormRowProps) => {
  return (
    <div className={`px-2 flex items-center bg-lightGray mb-[20px] ${className}`}>
      <span className={`mr-[40px] flex text-darkGrey text-lg  float-left`}>
        {label}
      </span>
      <span>{children}</span>
    </div>
  );
};

export default FormRow;