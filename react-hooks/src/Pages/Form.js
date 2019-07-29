import React from "react";
import useSignUpForm from "../Components/CustomHooks/CustomHook";

const Form = () => {
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(signup);
  // callback function
  const signup = () => {
    alert(`User Created!
         Name: ${inputs.firstName} ${inputs.lastName}
         Email: ${inputs.email}`);
  };
  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={inputs.firstName}
            onChange={handleInputChange}
            required
          />
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={inputs.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            onChange={handleInputChange}
            value={inputs.email}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password1"
            onChange={handleInputChange}
            value={inputs.password1}
          />
        </div>
        <div>
          <label>Re-enter Password</label>
          <input
            type="password"
            name="password2"
            onChange={handleInputChange}
            value={inputs.password2}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Form;
