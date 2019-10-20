import React from "react";
import Input from "../input/Input";
import userForm from "../../customhooks/userForm";
import validate from "../../validators/validators";

const Form = () => {
  const { values, errors, handleChange, handleSubmit } = userForm(
    login,
    validate
  );

  function login() {
    console.log("Submitted!!", values);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input
        className={`input ${errors.username && "is-danger"}`}
        type="text"
        name="username"
        label="username"
        onChange={handleChange}
        value={values.username}
        required
      >
        {errors.username && <p className="help is-danger">{errors.username}</p>}
      </Input>
      <Input
        className={`input ${errors.email && "is-danger"}`}
        type="email"
        name="email"
        label="email"
        onChange={handleChange}
        value={values.email}
        required
      >
        {errors.email && <p className="help is-danger">{errors.email}</p>}
      </Input>
      <Input
        className={`input ${errors.password && "is-danger"}`}
        type="password"
        name="password"
        label="password"
        onChange={handleChange}
        value={values.password}
        required
      >
        {errors.password && <p className="help is-danger">{errors.password}</p>}
      </Input>
      <Input
        className="input"
        type="password"
        name="confirmPassword"
        label="confirm password"
        onChange={handleChange}
        value={values.confirmPassword}
        required
      >
        {errors.confirmPassword && (
          <p className="help is-danger">{errors.confirmPassword}</p>
        )}
      </Input>
      <button type="submit" className="submit" onClick={handleSubmit}>
        SUBMIT
      </button>
    </form>
  );
};

export default Form;
