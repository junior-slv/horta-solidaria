import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface CampoFichaIconeProps {
  conteudo?: string;
  icon?: IconDefinition;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickIcon?: () => void;
}

const CampoFichaIcone: React.FC<CampoFichaIconeProps> = ({
  icon,
  className,
  conteudo,
  onChange,
  onClickIcon,
}) => {
  const handleClickIcon = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (onClickIcon) {
      onClickIcon();
    }
  };

  return (
    <div className="relative p-2">
      <p
        className={`pl-10 pr-4 py-2 bg-lightGray border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black ${className}`}
      >
        {conteudo}
      </p>
      {icon && (
        <div
          className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-auto cursor-pointer"
          onClick={handleClickIcon}
        >
          <FontAwesomeIcon icon={icon} className="text-gray-400" />
        </div>
      )}
    </div>
  );
};

export default CampoFichaIcone;
