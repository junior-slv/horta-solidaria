import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faCog } from '@fortawesome/free-solid-svg-icons';

const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-200 w-full md:w-1/4 p-4">
      <h2 className="text-xl font-bold mb-4">Sidebar</h2>
      <ul>
        <li className="py-2 flex items-center">
          <FontAwesomeIcon icon={faHome} className="mr-2" /> Página Inicial
        </li>
        <li className="py-2 flex items-center">
          <FontAwesomeIcon icon={faUsers} className="mr-2" /> Usuários
        </li>
        <li className="py-2 flex items-center">
          <FontAwesomeIcon icon={faCog} className="mr-2" /> Configurações
        </li>
      </ul>
    </div>
  );
};

const ExamplePage: React.FC = () => {
  return (
    <div className="bg-gray-300 flex-grow p-4">
      <h2 className="text-xl font-bold mb-4">Example Page</h2>
    </div>
  );
};

const Teste: React.FC = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  return (
    <div className="flex">
      {sidebarExpanded && <Sidebar />}
      <div className="flex flex-col flex-grow">
        <button
          className="fixed top-4 left-4 z-10 bg-gray-200 p-2 rounded-md"
          onClick={toggleSidebar}
        >
          {sidebarExpanded ? 'Retrair' : 'Expandir'}
        </button>
        <div className="ml-16">
          <ExamplePage />
        </div>
      </div>
    </div>
  );
};

export default Teste;
