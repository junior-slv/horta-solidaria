import React, { ReactNode } from "react";

interface SidebarItemProps {
  label: ReactNode;
  children: ReactNode;
  className: string;
  onClick?: () => void;
}

const SidebarItem = ({ children, label, className, onClick }: SidebarItemProps) => {
  return (
    <li
      className={
        "text-white text-sm flex items-center gap-x-4 curson-pointer p-2 hover:bg-darkGreen rounded-md cursor-pointer"
      }
      onClick={onClick} 
    >
      <span className="text-2xl block float-left">{children}</span>
      <span className={`${className} text-lg font-medium flex-1 duration-200`}>
        {label}
      </span>
    </li>
  );
};

export default SidebarItem;