import React, { ReactNode } from "react";

interface FormRowProps {
  label: ReactNode;
  children: ReactNode;
}

const FormRow = ({ label, children }: FormRowProps) => {
  return (
    <div className={`px-4 flex items-center bg-lightGray mb-[20px]`}>
      <span className={`mr-[40px] flex text-darkGrey text-lg  float-left`}>
        {label}
      </span>
      <span>{children}</span>
    </div>
  );
};

export default FormRow;