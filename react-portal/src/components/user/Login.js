import React, { Component } from "react";
class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleLoginFormSubmit = e => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(user);
  };

  render() {
    return (
      <form onSubmit={this.handleLoginFormSubmit}>
        <div>
          <input
            type="text"
            placeholder="E-mail"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </div>

        <button type="submit" className="login">
          Login
        </button>
      </form>
    );
  }
}

export default Login;
