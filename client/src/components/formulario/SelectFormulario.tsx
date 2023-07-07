import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface SelectFormularioProps {
  placeholder?: string;
  icon?: IconDefinition;
  className?: string;
  value?: string;
  options: string[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectFormulario: React.FC<SelectFormularioProps> = ({
  placeholder,
  icon,
  className,
  value,
  options,
  onChange,
}) => {
  return (
    <div className="relative">
      <select
        value={value}
        className={`pl-10 pr-4 py-2 bg-lightGray border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black ${className}`}
        onChange={onChange}
      >
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FontAwesomeIcon icon={icon} className="text-gray-400" />
        </div>
      )}
    </div>
  );
};

export default SelectFormulario;
