import React from "react";
import InputError from "./InputError";

const Input = ({
  type,
  name,
  value,
  onChange,
  onBlur,
  palceholder,
  errorText,
  cName,
}) => {
  return (
    <div>
      <input
        placeholder={palceholder}
        type={type}
        name={name}
        className={`${cName} p-3
          text-black 
        rounded-md bg-gray-200 
        border-none`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <InputError errorText={errorText} />
    </div>
  );
};

export default Input;
