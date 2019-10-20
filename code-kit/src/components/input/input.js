import React from "react";

const Input = ({ label, type, name, value, onChange, className }) => {
  return (
    <div className="field">
      <label htmlFor="label" className="label">
        {label}:
      </label>
      <div className="control">
        <input
          type={type}
          name={name}
          value={value || ""}
          onChange={onChange}
          className={className}
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default Input;
