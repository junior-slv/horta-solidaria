import React, { ReactNode } from "react";

interface FormRowProps {
  label?: ReactNode;
  children: ReactNode;
  className?: string;
}

const FormRow = ({ label, children, className }: FormRowProps) => {
  return (
    <div className={` flex items-center bg-lightGray mb-[15px] ${className}`}>
      <span className={`mr-[50px] flex text-darkGrey text-lg  float-left`}>
        {label}
      </span>
      <span>{children}</span>
    </div>
  );
};

export default FormRow;