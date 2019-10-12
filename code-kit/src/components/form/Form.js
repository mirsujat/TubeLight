import React from "react";
import Input from "../input/input";

const Form = () => {
  return (
    <div className="form">
      <h1>Hello form Form Component</h1>
      <Input className="input" type="email" name="name" />
      <Input className="input" type="password" name="name" />
    </div>
  );
};

export default Form;
