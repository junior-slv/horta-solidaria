import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface InputFormularioProps {
  placeholder?: string;
  icon?: IconDefinition;
  className?: string;
  type?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickIcon?: () => void;
}

const InputFormulario: React.FC<InputFormularioProps> = ({
  placeholder,
  icon,
  className,
  type,
  value,
  onChange,
  onClickIcon,
}) => {
  const handleClickIcon = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation(); // Impede que o evento de clique se propague para o elemento pai
    if (onClickIcon) {
      onClickIcon();
    }
  };

  return (
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        className={`pl-10 pr-4 py-2 bg-darkerGray/20 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black ${className}`}
        onChange={onChange}
      />
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

export default InputFormulario;
