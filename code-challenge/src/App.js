import React, { Component } from "react";
import Axios from "axios";
import Modal from "./modal/Modal";
import "./App.css";

class App extends Component {
  state = {
    searchTerm: "me",
    user: "",
    open: false,
    registration: {
      username: "mirsujat",
      email: "mir.sujat@gmail.com",
      password: "123456",
      confirmPassword: "123456"
    }
  };
  componentDidMount = () => {
    if (!this.state.user) {
      this.searchIP();
    }
  };
  componentDidUpdate = (prevProps, prevState) => {
    const { searchTerm } = this.state;
    if (
      prevState.searchTerm !== "me" &&
      prevState.searchTerm !== searchTerm &&
      searchTerm.length === 14
    ) {
      this.searchIP();
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    this.searchIP();
  };

  handleChange = e => {
    let fields = this.state.registration;
    fields[e.target.name] = e.target.value;
    this.setState({ fields });
  };

  handleRegistration = e => {
    e.preventDefault();
    const registration = {
      username: this.state.registration.username,
      email: this.state.registration.email,
      password: this.state.registration.password,
      confirmPassword: this.state.registration.confirmPassword
    };
    console.log("Registration: ", registration);
  };
  searchIP = async () => {
    const { searchTerm } = this.state;
    try {
      const { data } = await Axios.get(`https://ip.nf/${searchTerm}.json`);
      this.setState({ user: data, searchTerm: data.ip.ip });
    } catch (error) {
      console.log(error);
    }
  };
  handleModalOpen = () => {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
  };

  render() {
    const { user } = this.state;
    let content = <div>There is no content to show.</div>;
    if (user) {
      content = (
        <div className="content">
          <ul>
            <li>
              <span>IP Address: </span>
              {user.ip.ip}
            </li>
            <li>
              <span>Hostname: </span>
              {user.ip.hostname}
            </li>
            <li>
              <span>City: </span>
              {user.ip.city}
            </li>
            <li>
              <span>Country: </span>
              {user.ip.country}
            </li>
          </ul>
        </div>
      );
    }
    return (
      <div className="app">
        <div className="header">
          <div />
          <section className="search">
            <form onSubmit={this.handleSubmit} className="search-form">
              <input
                type="text"
                value={this.state.searchTerm}
                onChange={e => this.setState({ searchTerm: e.target.value })}
              />
              <button type="type">Submit</button>
            </form>
          </section>
          <div onClick={this.handleModalOpen} className="reg-btn">
            Register
          </div>
        </div>
        {content}
        <Modal open={this.state.open} closed={this.handleModalOpen}>
          <form onSubmit={this.handleRegistration} className="reg-form">
            <div className="form-field">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                value={this.state.registration.username}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                name="email"
                value={this.state.registration.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                name="password"
                value={this.state.registration.password}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="text"
                name="confirmPassword"
                value={this.state.registration.confirmPassword}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit">Register</button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default App;
