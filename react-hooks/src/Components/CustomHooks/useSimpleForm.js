import { useState } from "react";

const useSimpleForm = callback => {
  const [values, setValues] = useState({});

  const handleSubmit = event => {
    if (event) event.preventDefault();
    console.log({
      values
    });
  };

  const handleChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleSubmit,
    handleChange,
    values
  };
};

export default useSimpleForm;
