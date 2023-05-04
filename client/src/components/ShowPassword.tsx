import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type showPasswordData = {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

const ShowPassword = ({ onClick }: showPasswordData) => {
  return (
    <div
      className="text-black text-base cursor-pointer transition duration-200 ease-in-out select-none hover:text-darkGreen italic"
      onClick={onClick}
    >
      <FontAwesomeIcon
        className="absolute right-2 top-[50px] text-xl cursor-pointer"
        icon={faEyeSlash}
      />{" "}
    </div>
  );
};
export const HidePassword = ({ onClick }: showPasswordData) => {
  return (
    <div
      className="text-black text-base cursor-pointer transition duration-200 ease-in-out select-none hover:text-darkGreen italic"
      onClick={onClick}
    >
      <FontAwesomeIcon
        className="absolute right-2 top-[50px] text-xl cursor-pointer"
        icon={faEye}
      />
    </div>
  );
};

export default ShowPassword;
