import React, { Component } from "react";
import Modal from "../Modal/Modal";

const initFields = {
  username: "",
  email: "",
  password: "",
  confirmPassword: ""
};

class Registration extends Component {
  state = {
    fields: { ...initFields },
    fieldError: { ...initFields }
  };
  handleChange = e => {
    const { fields } = this.state;
    fields[e.target.name] = e.target.value;
    this.setState({ fields });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { fields } = this.state;
    const isValid = this.validate();
    if (isValid) {
      console.log("Register: ", fields);
      this.setState({
        fields: { ...initFields },
        fieldError: { ...initFields }
      });
    }
  };
  validate = () => {
    const { fields } = this.state;
    const fieldError = {};
    let isValid = true;
    const usernameRegex = /^\w+[\_.-]?\w{1,19}$/;
    const msg = {
      username: "Username must be aplhanumeric and contain (2-20) characters.",
      email: "Ivalid e-mail address. i.e; test@gmail.com",
      password:
        "password must be between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter.",
      confirmPassword: "Password and confirmPassword not matched."
    };
    if (!fields.username.match(usernameRegex)) {
      isValid = false;
      fieldError.username = msg.username;
    }
    this.setState({ fieldError });
    return isValid;
  };
  render() {
    return (
      <Modal open={this.props.open} closed={this.props.closed}>
        <div className="card">
          <h1 className="card-header">REGISTER NOW</h1>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-field">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  value={this.state.fields.username}
                  onChange={this.handleChange}
                />
                <p className="error">{this.state.fieldError.username}</p>
              </div>
              <div className="form-field">
                <label htmlFor="e-mail">E-mail</label>
                <input
                  type="text"
                  name="email"
                  value={this.state.fields.email}
                  onChange={this.handleChange}
                />
                <p className="error">{this.state.fieldError.email}</p>
              </div>
              <div className="form-field">
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  name="password"
                  value={this.state.fields.password}
                  onChange={this.handleChange}
                />
                <p className="error">{this.state.fieldError.password}</p>
              </div>
              <div className="form-field">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="text"
                  name="confirmPassword"
                  value={this.state.fields.confirmPassword}
                  onChange={this.handleChange}
                />
                <p className="error">{this.state.fieldError.confirmPassword}</p>
              </div>
              <div className="form-field">
                <button type="submit">Register</button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    );
  }
}

export default Registration;
