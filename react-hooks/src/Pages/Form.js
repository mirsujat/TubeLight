import React, { useState, useEffect } from "react";

const Form = () => {
  const [regForm, setRegForm] = useState({
    name: "",
    age: "",
    sex: ""
  });
  function handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setRegForm({
      [name]: value
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(regForm.name);
    console.log(regForm.age);
    console.log(regForm.sex);
  }
  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name={regForm.name}
          value={regForm.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name={regForm.age}
          value={regForm.age}
          onChange={handleChange}
        />
        <input
          type="text"
          name={regForm.sex}
          value={regForm.sex}
          onChange={handleChange}
        />
        <button type="submit" value="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
