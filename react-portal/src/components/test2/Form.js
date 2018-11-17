import React from "react";
const Form = props => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input
          type={props.type}
          name={props.name}
          value={props.value}
          onChange={props.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
