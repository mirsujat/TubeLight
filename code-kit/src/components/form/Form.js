import React from "react";
import Input from "../input/input";
import Card from "../card/card";

const Form = () => {
  return (
    <Card>
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
    </Card>
  );
};

export default Form;
