import React from "react";
const InputFeild = props => {
  let invalid = "";
  if (props.touched && props.inValid) {
    invalid = "invalid";
  }
  return (
    <div className="input-field">
      <label htmlFor={props.for}>{props.label}</label>
      <input
        className={invalid}
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default InputFeild;
