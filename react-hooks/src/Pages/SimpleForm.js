import React from "react";
import useSimpleForm from "../Components/CustomHooks/useSimpleForm";

const SimpleForm = () => {
  const login = () => {
    console.log("Form Values: ", { values });
  };
  const { handleSubmit, handleChange, values } = useSimpleForm(login);

  return (
    <div>
      <h1>Simple Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          value={values.firstname || ""}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="lastname"
          value={values.lastname || ""}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="email"
          value={values.email || ""}
          onChange={handleChange}
        />
        <br />
        <select
          name="select"
          value={values.select || "Mango"}
          onChange={handleChange}
        >
          <option value={values.grapefruit}>Grapefruit</option>
          <option value={values.lime}>Lime</option>
          <option value={values.coconut}>Coconut</option>
          <option value={values.mango}>Mango</option>
        </select>
        <br />
        <input
          name="isGoing"
          type="checkbox"
          checked={values.isGoing || false}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SimpleForm;
