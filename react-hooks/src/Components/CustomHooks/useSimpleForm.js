import { useState } from "react";

const useSimpleForm = callback => {
  const [values, setValues] = useState({});

  const handleSubmit = event => {
    if (event) event.preventDefault();
    callback();
  };

  const handleChange = event => {
    event.persist();
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

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
