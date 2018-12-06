import React from "react";

const Input = props => {
  return (
    <div className="input-field">
      <label htmlFor={props.for}>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
