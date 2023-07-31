import React from 'react';

interface CamposFichaProps {
  conteudo: string;
  className?: string;
}

const CamposFicha: React.FC<CamposFichaProps> = ({ conteudo, className }) => {
  return (
    <div className={`font-bold text-off-white font-poppins relative flex justify-center items-center pl-10 pr-4 py-2 bg-lightGreen border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black ${className}`}>
      <p>{conteudo}</p>
    </div>
  );
};

export default CamposFicha;
