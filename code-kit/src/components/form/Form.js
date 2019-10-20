import React from "react";
import Input from "../input/Input";

const Form = () => {
  return (
    <form className="form">
      <Input className="input" type="text" name="username" label="username" />
      <Input className="input" type="email" name="email" label="email" />
      <Input
        className="input"
        type="password"
        name="password"
        label="password"
      />
      <Input
        className="input"
        type="password"
        name="confirmPassword"
        label="confirm password"
      />
    </form>
  );
};

export default Form;
