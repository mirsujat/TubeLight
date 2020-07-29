import React from "react";
import useSimpleForm from "../Components/CustomHooks/useSimpleForm";
import validate from "../Validation/Validation";

const SimpleForm = () => {
  const login = () => {
    console.log("Form Values: ", { values });
  };
  const { handleSubmit, handleChange, values, errors } = useSimpleForm(
    login,
    validate
  );

  return (
    <div>
      <h1>Simple Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="First Name"
          type="text"
          name="firstname"
          value={values.firstname || ""}
          onChange={handleChange}
        />
        <br />
        <input
          placeholder="Last Name"
          type="text"
          name="lastname"
          value={values.lastname || ""}
          onChange={handleChange}
        />
        <br />
        <input
          placeholder="email"
          type="text"
          name="email"
          value={values.email || ""}
          onChange={handleChange}
        />
        {errors.email && <p className="is-danger">{errors.email}</p>}
        <br />
        <input
          placeholder="Password"
          type="text"
          name="password"
          value={values.password || ""}
          onChange={handleChange}
        />
        {errors.password && <p className="is-danger">{errors.password}</p>}
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
