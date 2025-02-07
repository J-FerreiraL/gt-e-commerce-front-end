import { useState } from 'react';
import { FaCheck, FaCircle } from 'react-icons/fa';

const FilterGroup = ({ title, inputType, options }) => {
  const [checked, setChecked] = useState(null);

  const handleInputChange = (value) => {
    setChecked(value === checked ? null : value);
  };
  
  return(
    <div className="flex flex-col pl-8">
      <h2 className="text-darkGray2 font-bold text-sm h-5">{title}</h2>
      {options.map((option, index) => (
        <label
          key={index}
          className="flex items-center mt-2 cursor-pointer relative"
        >
          <input
            type={inputType}
            value={option.value}
            checked={checked === option.value}
            onChange={() => handleInputChange(option.value)}
            className={`
              peer cursor-pointer appearance-none h-4 w-4 border border-darkGray3 focus:outline-none relative 
              ${inputType === 'checkbox'
                ? 'rounded-sm checked:bg-primary checked:border-none checked:hover:bg-tertiary ease-in transition-all duration-300'
                : 'rounded-full checked:border-primary checked:hover:border-tertiary ease-in transition-all duration-300'
              }
            `}
          />
          <div className="flex items-center justify-center absolute top-1/2 right-[16.75rem]">
            {inputType === 'checkbox' ? (
              <FaCheck
                className={`text-white absolute w-3 ${checked === option.value ? 'block' : 'hidden'}`}
              />
            ) : (
              <FaCircle
                className={`text-primary absolute w-2 ${checked === option.value ? 'block' : 'hidden'}`}
              />
            )}
          </div>
          <span className="text-darkGray2 font-medium text-sm ml-2">
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
}

export default FilterGroup;