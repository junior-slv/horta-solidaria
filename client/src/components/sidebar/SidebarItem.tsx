import React, { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface SideBarItemProps {
  icon: IconDefinition;
  onClick: () => void;
  text: string;
}

const SideBarItem: React.FC<SideBarItemProps> = ({ icon, onClick, text }) => {
  return (
    <div className="w-full flex items-center gap-x-1.5 group select-none cursor-pointer">
      <div className="w-1 rounded-xl h-10 bg-transparent transitio n-colors duration-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-off-white transition-all duration-300"></div>
      </div>
      <div
        className="group-hover:bg-black/10 w-full group-active:scale-95 self-stretch pl-5 rounded flex items-center space-x-2 transition-all duration-200 group-hover:text-black hover:text-black text-off-white text-xl"
        onClick={onClick}
      >
        <FontAwesomeIcon
          icon={icon}
          className="h-8 w-6 group-hover:fill-red fill-gray/600 transition-colors duration-200"
        />
        <span className="font-poppins text-xl">{text}</span>
      </div>
    </div>
  );
};

export default SideBarItem;
