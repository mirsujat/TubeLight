import React from "react";
import Input from "../input/Input";
import useForm from "../../customhooks/userForm";
import { validate } from "../../validators/validators";

const Form = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    login,
    validate
  );

  function login() {
    console.log("Submitted!!!", values);
  }
  return (
    <div className="reg-form">
      <div className="reg-form-header">
        <h1>registered now!</h1>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <Input
          label="username"
          type="text"
          name="username"
          value={values.username || ""}
          onChange={handleChange}
          className={`input ${errors.username && "is-danger"}`}
          placeholder="username"
        >
          {errors.username && (
            <p className="help is-danger">{errors.username}</p>
          )}
        </Input>
        <Input
          label="email"
          type="email"
          name="email"
          value={values.email || ""}
          onChange={handleChange}
          className={`input ${errors.email && "is-danger"}`}
          placeholder="E-mail"
        >
          {errors.email && <p className="help is-danger">{errors.email}</p>}
        </Input>
        <Input
          label="password"
          type="password"
          name="password"
          value={values.password || ""}
          onChange={handleChange}
          className={`input ${errors.password && "is-danger"}`}
          placeholder="password"
        >
          {errors.password && (
            <p className="help is-danger">{errors.password}</p>
          )}
        </Input>
        <Input
          label="confirm password"
          type="password"
          name="confirmPassword"
          value={values.confirmPassword || ""}
          onChange={handleChange}
          className={`input ${errors.confirmPassword && "is-danger"}`}
          placeholder="confirm password"
        >
          {errors.confirmPassword && (
            <p className="help is-danger">{errors.confirmPassword}</p>
          )}
        </Input>
        <button type="submit" className="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
