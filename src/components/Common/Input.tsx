import React from 'react';

interface InputI {
  label?: string | React.Component;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
  value: string;
  name?: string;
  type: string;
}

const Input: React.FC<InputI> = ({ className, onChange, label, placeholder, value, name, type }) => {
  return (
    <div>
      {label && <label className='label'>{label}</label>}
      <input
        onChange={onChange}
        type={type}
        className={className}
        placeholder={placeholder}
        value={value}
        name={name}
      />
    </div>
  );
};

export default Input;
