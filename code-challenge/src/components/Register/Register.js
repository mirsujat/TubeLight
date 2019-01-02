import React, { Component } from "react";
const initFields = {
  username: "",
  email: "",
  password: "",
  confirmPassword: ""
};
class Registration extends Component {
  state = {
    field: {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    formErrors: {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  };
  handleChange = e => {
    const { field } = this.state;
    field[e.target.name] = e.target.value;
    this.setState({ field });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { field } = this.state;
    let isValid = this.validate();
    if (isValid) {
      console.log("Registration Data: ", field);
      this.setState({ field: { ...initFields }, formErrors: {} });
    }
  };
  validate = () => {
    const { field } = this.state;
    const formErrors = {};
    let isValid = true;
    const usernamePattern = /^\w+[\.-]?\w{2,20}$/;
    const msg = {
      username: "Username must be aplhanumeric and contain (2-20) characters.",
      email: "Ivalid e-mail address. i.e; test@gmail.com",
      password: "Pasword must be 6-20 characters long.",
      confirmPassword: "Password and confirmPassword not matched."
    };

    if (!field.username.match(usernamePattern)) {
      isValid = false;
      formErrors.username = msg.username;
    }
    this.setState({ formErrors });
    return isValid;
  };

  render() {
    return (
      <div className="register">
        <div className="card">
          <h1 className="card-header">REGISTER NOW!</h1>
          <form onSubmit={this.handleSubmit} className="reg-form">
            <div className="form-field">
              <label htmlFor="username">username</label>
              <input
                type="text"
                name="username"
                value={this.state.field.username}
                onChange={this.handleChange}
              />
              <p className="error">{this.state.formErrors.username}</p>
            </div>
            <div className="form-field">
              <label htmlFor="email">e-mail</label>
              <input
                type="text"
                name="email"
                value={this.state.field.email}
                onChange={this.handleChange}
              />
              <p className="error">{this.state.formErrors.email}</p>
            </div>
            <div className="form-field">
              <label htmlFor="password">password</label>
              <input
                type="text"
                name="password"
                value={this.state.field.password}
                onChange={this.handleChange}
              />
              <p className="error">{this.state.formErrors.password}</p>
            </div>
            <div className="form-field">
              <label htmlFor="confirmPassword">confirm password</label>
              <input
                type="text"
                name="confirmPassword"
                value={this.state.field.confirmPassword}
                onChange={this.handleChange}
              />
              <p className="error">{this.state.formErrors.confirmPassword}</p>
            </div>
            <div className="form-field">
              <button type="submit">REGISTER</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Registration;
