import React, { Component } from "react";
import Modal from "./Modal";
const initRegForm = {
  username: "",
  email: "",
  password: ""
};
class RegForm extends Component {
  state = {
    fields: { ...initRegForm },
    regFormError: { ...initRegForm }
  };

  //REGISTRATION FORM
  handleChange = e => {
    const { fields } = this.state;
    fields[e.target.name] = e.target.value;
    this.setState({ fields });
  };
  submitRegForm = e => {
    e.preventDefault();
    let fields = initRegForm;
    const isValid = this.validateRegForm();
    if (isValid) {
      console.log(this.state.fields);
      this.setState({ fields });
    }
  };

  // Validate Reg Form
  validateRegForm = () => {
    const { fields } = this.state;
    const regFormError = {};
    let isValid = true;
    const pattern = {
      username: /^[\w\.-]{2,20}$/,
      email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
    };
    const errorMsg = {
      username:
        "Username must be alphanumeric[A-Za-z0-9_.-] and contain (2-20) Characters.",
      email: "Invalid e-mail address. i.e; test@gmail.com",
      password:
        "Password must be 6-20 characters which contain at least one numeric digit, one uppercase and one lowercase letter."
    };
    if (!fields.username.match(pattern.username)) {
      isValid = false;
      regFormError.username = errorMsg.username;
    }
    if (!fields.email.match(pattern.email)) {
      isValid = false;
      regFormError.email = errorMsg.email;
    }
    if (!fields.password.match(pattern.password)) {
      isValid = false;
      regFormError.password = errorMsg.password;
    }
    this.setState({ regFormError });
    return isValid;
  };

  render() {
    return (
      <Modal open={this.props.open} closed={this.props.closed}>
        <div className="card">
          <div className="card-header">
            <h1>REGISTER NOW!</h1>
          </div>
          <div className="card-body">
            <form onSubmit={this.submitRegForm} className="reg-form">
              <div className="form-field">
                <label htmlFor="">Username</label>
                <input
                  type="text"
                  name="username"
                  value={this.state.fields.username}
                  onChange={this.handleChange}
                />
                <p className="error">{this.state.regFormError.username}</p>
              </div>
              <div className="form-field">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  name="email"
                  value={this.state.fields.email}
                  onChange={this.handleChange}
                />
                <p className="error">{this.state.regFormError.email}</p>
              </div>
              <div className="form-field">
                <label htmlFor="">Password</label>
                <input
                  type="text"
                  name="password"
                  value={this.state.fields.password}
                  onChange={this.handleChange}
                />
                <p className="error">{this.state.regFormError.password}</p>
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

export default RegForm;
