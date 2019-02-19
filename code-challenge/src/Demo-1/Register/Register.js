import React, { Component } from "react";
import Modal from "../Modal/Modal";

const initFields = {
  username: "",
  email: "",
  password: "",
  confirmPassword: ""
};

class Register extends Component {
  state = {
    fields: { ...initFields },
    formError: { ...initFields },
    submitMsg: ""
  };
  handleChange = e => {
    const { fields } = this.state;
    fields[e.target.name] = e.target.value;
    this.setState({ fields });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { fields } = this.state;
    let isValid = this.validate();
    if (isValid) {
      console.log("Form Value:", fields);
      this.setState({
        fields: { ...initFields },
        formError: { ...initFields },
        submitMsg: "Yaaa Hooo Submitted Successfully!!!"
      });
    }
  };
  validate = () => {
    const { fields } = this.state;
    const formError = {};
    let isValid = true;
    const usernamePattern = /^\w+[\.-]?\w{1,19}$/;
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,19}$/;
    const msg = {
      username: "Username must be aplhanumeric and contain (2-20) characters.",
      email: "Ivalid e-mail address. i.e; test@gmail.com",
      password:
        "password must be between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter.",
      confirmPassword: "Password and confirmPassword not matched."
    };
    if (!fields.username.match(usernamePattern)) {
      isValid = false;
      formError.username = msg.username;
    }
    if (!fields.email.match(emailPattern)) {
      isValid = false;
      formError.email = msg.email;
    }
    if (!fields.password.match(passPattern)) {
      isValid = false;
      formError.password = msg.password;
    }
    if (fields.confirmPassword !== fields.password) {
      isValid = false;
      formError.confirmPassword = msg.confirmPassword;
    }
    this.setState({ formError });
    return isValid;
  };

  render() {
    return (
      <Modal open={this.props.open} closed={this.props.closed}>
        <div className="form-group">
          <h1>REGISTER NOW!</h1>
          <p className="submit">{this.state.submitMsg}</p>
          <form className="reg-form" onSubmit={this.handleSubmit}>
            <div className="form-field">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                value={this.state.fields.username}
                onChange={this.handleChange}
              />
              <p className="red">{this.state.formError.username}</p>
            </div>
            <div className="form-field">
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                name="email"
                value={this.state.fields.email}
                onChange={this.handleChange}
              />
              <p className="red">{this.state.formError.email}</p>
            </div>
            <div className="form-field">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                name="password"
                value={this.state.fields.password}
                onChange={this.handleChange}
              />
              <p className="red">{this.state.formError.password}</p>
            </div>
            <div className="form-field">
              <label htmlFor="password">Confirm Password</label>
              <input
                type="text"
                name="confirmPassword"
                value={this.state.fields.confirmPassword}
                onChange={this.handleChange}
              />
              <p className="red">{this.state.formError.confirmPassword}</p>
            </div>
            <div className="form-field">
              <button type="submit" className="flat-btn">
                Register
              </button>
            </div>
          </form>
        </div>
      </Modal>
    );
  }
}

export default Register;
