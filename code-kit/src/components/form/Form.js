import React from "react";
import Input from "../input/Input";

const Form = () => (
  <div className="reg-form">
    <form className="form-group" onSubmit={() => alert("hi!")}>
      <Input
        type="text"
        name="username"
        value="value"
        onChange={() => console.log("1")}
        placeholder="username"
      ></Input>
      <Input
        type="text"
        name="username"
        value="value"
        onChange={() => console.log("2")}
        placeholder="username"
      ></Input>
      <Input
        type="text"
        name="username"
        value="value"
        onChange={() => console.log("3")}
        placeholder="username"
      ></Input>
      <Input
        type="text"
        name="username"
        value="value"
        onChange={() => console.log("4")}
        placeholder="username"
      ></Input>
      <button type="submit" className="submit-btn">
        submit
      </button>
    </form>
  </div>
);

export default Form;
