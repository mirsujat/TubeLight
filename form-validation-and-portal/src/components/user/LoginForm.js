import React, { Component } from "react";
class LoginForm extends Component {
  state = { email: "", password: "" };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(user);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-fields">
          <input
            type="text"
            name="email"
            placeholder="E-mail"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div className="input-fields">
          <input
            type="text"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default LoginForm;
