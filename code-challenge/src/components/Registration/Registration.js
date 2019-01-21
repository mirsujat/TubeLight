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
    console.log("Register: ", fields);
    this.setState({
      fields: { ...initFields },
      fieldError: { ...initFields }
    });
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
              </div>
              <div className="form-field">
                <label htmlFor="e-mail">E-mail</label>
                <input
                  type="text"
                  name="email"
                  value={this.state.fields.email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-field">
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  name="password"
                  value={this.state.fields.password}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-field">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="text"
                  name="confirmPassword"
                  value={this.state.fields.confirmPassword}
                  onChange={this.handleChange}
                />
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
