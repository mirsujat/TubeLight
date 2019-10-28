import React from "react";

const Input = ({
  type,
  name,
  value,
  placeholder,
  onChange,
  className,
  children
}) => (
  <div className="form-control">
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={className}
    ></input>
    {children}
  </div>
);

export default Input;
