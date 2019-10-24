import React from "react";

const Input = ({
  className,
  type,
  name,
  value,
  onChange,
  children,
  placeholder
}) => (
  <div className="form-control">
    <input
      className={className}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      autoComplete="off"
      placeholder={placeholder}
    />
    {children}
  </div>
);

export default Input;
