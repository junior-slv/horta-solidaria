import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

interface SidebarTesteProps {
  items: SidebarTesteItem[];
}

interface SidebarTesteItem {
  icon: any;
  label: string;
  onClick: () => void;
}

const SidebarTeste: React.FC<SidebarTesteProps> = ({ items }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleSidebarTeste = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`w-${expanded ? '1/5' : '1/20'} bg-gray-100 h-screen transition-width duration-300`}
    >
      <div className="flex justify-end p-4">
        <FontAwesomeIcon
          icon={expanded ? faTimes : faBars}
          onClick={toggleSidebarTeste}
          className="cursor-pointer"
        />
      </div>
      <ul className="list-none p-0">
        {items.map((item, index) => (
          <li
            key={index}
            className={`flex items-center p-4 cursor-pointer transition-bg ${
              expanded ? 'bg-gray-300' : 'bg-transparent'
            }`}
            onClick={item.onClick}
          >
            <FontAwesomeIcon icon={item.icon} className="mr-2" />
            {expanded && <span>{item.label}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarTeste;
