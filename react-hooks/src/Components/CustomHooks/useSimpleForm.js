import { useState } from "react";

const useSimpleForm = callback => {
  const [values, setValues] = useState({});

  const handleSubmit = event => {
    if (event) event.preventDefault();
    callback();
  };

  const handleChange = event => {
    event.persist();
    const name = event.target.name;
    const value = event.target.value;
    setValues(values => ({
      ...values,
      [name]: value
    }));
  };

  return {
    handleSubmit,
    handleChange,
    values
  };
};

export default useSimpleForm;
