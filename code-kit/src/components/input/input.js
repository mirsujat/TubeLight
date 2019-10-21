import React from "react";

const Input = ({ label, className, type, name, value, onChange, children }) => (
  <div className="form-field">
    <label htmlFor="label" className="label">
      {label}
    </label>
    <div className="form-control">
      <input
        className={className}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
      {children}
    </div>
  </div>
);

export default Input;
