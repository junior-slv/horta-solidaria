import { handleHomePage } from "@/services/hooks";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode } from "react";
import LargeButton from "../buttons/LargeButton";

interface ErrorProps {
  title: ReactNode;
  subtitle: ReactNode;
  message: ReactNode;
}

const HttpError = ({ title, subtitle, message }: ErrorProps) => {
  return (
    <div className="w-screen h-screen font-poppins flex items-stretch justify-center bg-darkGreen select-none">
      <form className="bg-beige shadow-md rounded-md p-12 space-y-5 w-[36rem] h-[37rem] self-center block">
        <p className="gap-3 text-center flex flex-col items-center justify-center font-bold text-4xl mb-1 text-black select-none">
          Ops!
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            className="flex text-9xl text-yellow"
          />
        </p>
        <p className="flex items-stretch justify-center font-bold text-8xl mb-1 text-black select-none">
          {title}
        </p>
        <p className="flex items-stretch justify-center font-bold text-3xl mb-1 text-black select-none">
          {subtitle}
        </p>
        <p className="flex items-center justify-center text-xl mb-1 text-black select-none">
          {message}
        </p>
        <div className="relative top-[22px]">
          <LargeButton onClick={handleHomePage}>Voltar</LargeButton>
        </div>
      </form>
    </div>
  );
};

export default HttpError;
