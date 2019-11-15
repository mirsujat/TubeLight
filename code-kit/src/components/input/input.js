import React from "react";

const Input = ({
  type,
  name,
  value,
  placeholder,
  onChange,
  className,
  datatestid,
  children
}) => (
  <div className="form-control" data-testid="form-control">
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={className}
      data-testid={datatestid}
    ></input>
    {children}
  </div>
);

export default Input;
