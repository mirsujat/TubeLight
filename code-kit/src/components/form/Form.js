import React from "react";
import Input from "../input/Input";
import useForm from "../../customhooks/userForm";
import { validate } from "../../validators/validators";

const Form = () => {
  const {
    handleChange,
    handleSubmit,
    values,
    errors,
    isSubmitting,
    setIsSubmitting,
    setValues,
    setErrors
  } = useForm(submitFormHandler, validate);

  function submitFormHandler() {
    if (isSubmitting) {
      console.log("submited: !!", values);
      setValues({});
      setErrors({});
      setIsSubmitting(false);
      console.log("Thanks for sumitting form!!");
    }
  }

  return (
    <div className="reg-form">
      <form className="form-group" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
          placeholder="username"
          className={`${errors.username && "error"}`}
        >
          {errors.username && (
            <p className={`${errors.username && "is-danger"}`}>
              {errors.username}
            </p>
          )}
        </Input>
        <Input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="E-mail"
          className={`${errors.email && "error"}`}
        >
          {errors.email && (
            <p className={`${errors.email && "is-danger"}`}>{errors.email}</p>
          )}
        </Input>
        <Input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          placeholder="password"
          className={`${errors.password && "error"}`}
        >
          {errors.password && (
            <p className={`${errors.password && "is-danger"}`}>
              {errors.password}
            </p>
          )}
        </Input>
        <Input
          type="password"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          placeholder="confirm password"
          className={`${errors.confirmPassword && "error"}`}
        >
          {errors.confirmPassword && (
            <p className={`${errors.confirmPassword && "is-danger"}`}>
              {errors.confirmPassword}
            </p>
          )}
        </Input>
        <button type="submit" className="submit-btn">
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
