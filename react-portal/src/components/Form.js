import React from "react";
const Form = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
