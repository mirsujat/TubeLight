import React, { Component } from "react";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./signup.styles.scss";

class SignUp extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  handleSubmit = async event => {
    event.preventDefault();

    alert("Hi!");
    //   const { displayName, email, password, confirmPassword } = this.state;
    //   if (password !== confirmPassword) {
    //     alert("Password and Confirm Password don't match");
    //     return;
    //   }
    //   try {
    //     const { user } = await auth.createUserWithEmailAndPassword(
    //       email,
    //       password
    //     );
    //     await createUserProfileDocument(user, { displayName });

    //     this.setState({
    //       displayName: "",
    //       email: "",
    //       password: "",
    //       confirmPassword: ""
    //     });
    //   } catch (error) {
    //     console.log(error);
    //   }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
