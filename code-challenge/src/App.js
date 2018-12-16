import React, { Component } from "react";
import Axios from "axios";
import Modal from "./components/Modal";

import "./App.css";

class App extends Component {
  state = {
    searchTerm: "me",
    user: "",
    error: "",
    loading: false,
    formError: {
      searchTermError: ""
    },
    fields: {
      username: "",
      email: "",
      password: ""
    },
    registrationFormError: {
      username: "",
      email: "",
      password: ""
    },
    open: false
  };

  componentDidMount() {
    if (!this.state.user) {
      this.searchIP();
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { searchTerm } = this.state;
    const ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (
      prevState.searchTerm !== "me" &&
      prevState.searchTerm !== searchTerm &&
      searchTerm.match(ipformat) &&
      searchTerm.length === 14
    ) {
      this.searchIP();
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.searchIP();
    }
  };

  handleModalOpen = () => {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
  };

  handleChange = e => {
    const { fields } = this.state;
    fields[e.target.name] = e.target.value;
    this.setState({ fields });
  };

  handleRegistration = e => {
    e.preventDefault();
    const isValid = this.validateRegistration();
    if (isValid) {
      console.log(this.state.fields);
    }
  };

  searchIP = async () => {
    const { searchTerm } = this.state;
    try {
      this.setState({
        error: "",
        loading: true
      });
      const { data } = await Axios.get(`https://ip.nf/${searchTerm}.json`);
      this.setState({
        searchTerm: data.ip.ip,
        user: data,
        error: "",
        loading: false,
        formError: ""
      });
    } catch (error) {
      this.setState({
        user: "",
        error: "Somethink went wrong!!!. IP information not found.",
        loading: false,
        formError: ""
      });
    }
  };
  validateRegistration = () => {
    const fields = this.state.fields;
    const registrationFormError = {};
    let isValid = true;
    const pattern = {
      username: /^[a-z\d]{2,20}$/,
      email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      password: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/
    };
    if (!fields.username.match(pattern.username)) {
      isValid = false;
      registrationFormError.username =
        "Username must alphanumeric and contain (2-20) Characters.";
    }
    if (!fields.email.match(pattern.email)) {
      isValid = false;
      registrationFormError.email =
        "Invalid E-mail Address. ie; test@gmail.com";
    }
    if (!fields.password.match(pattern.password)) {
      isValid = false;
      registrationFormError.password =
        " Password must be between [8 to 15 characters] which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.";
    }

    this.setState({ registrationFormError });
    return isValid;
  };

  validate = () => {
    const { searchTerm } = this.state;
    let formError = {};
    let valid = true;
    const ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (!searchTerm.match(ipformat)) {
      valid = false;
      formError.searchTermError =
        "Invalid IP Address. Learn more about valid IP Address.";
    }
    this.setState({ formError: formError });
    return valid;
  };

  handleModalOpen = () => {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
  };

  render() {
    const { user, error, loading } = this.state;
    let content = <div>There is no content to show!</div>;
    if (loading) {
      content = <div>Loading...</div>;
    }
    if (!loading && user) {
      content = (
        <div className="content">
          <ul>
            <li>
              <span>IP Address:</span>
              {user.ip.ip}
            </li>
            <li>
              <span>Hostname:</span>
              {user.ip.hostname}
            </li>
            <li>
              <span>City:</span>
              {user.ip.city}
            </li>
            <li>
              <span>Country:</span>
              {user.ip.country}
            </li>
          </ul>
        </div>
      );
    }
    if (error) {
      content = <div style={{ color: "red" }}>{error}</div>;
    }
    if (this.state.formError.searchTermError) {
      content = (
        <div style={{ color: "red" }}>
          {this.state.formError.searchTermError}
        </div>
      );
    }
    return (
      <div className="app">
        <div className="header">
          <div />
          <form onSubmit={this.handleSubmit} className="search-nav">
            <input
              type="text"
              name="searchTerm"
              value={this.state.searchTerm}
              onChange={e => this.setState({ searchTerm: e.target.value })}
            />
            <button type="submit">Submit</button>
          </form>
          <button className="reg-btn" onClick={this.handleModalOpen}>
            Register
          </button>
        </div>
        {content}
        <Modal open={this.state.open} closed={this.handleModalOpen}>
          <div className="card">
            <div className="card-header">REGISTER NOW!</div>
            <div className="card-body">
              <form onSubmit={this.handleRegistration} className="reg-form">
                <div className="form-field">
                  <label htmlFor="usernaem">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={this.state.fields.username}
                    onChange={this.handleChange}
                  />
                  <p className="error">
                    {this.state.registrationFormError.username}
                  </p>
                </div>

                <div className="form-field">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="text"
                    name="email"
                    value={this.state.fields.email}
                    onChange={this.handleChange}
                  />
                  <p className="error">
                    {this.state.registrationFormError.email}
                  </p>
                </div>
                <div className="form-field">
                  <label htmlFor="password">Password</label>
                  <input
                    type="text"
                    name="password"
                    value={this.state.fields.password}
                    onChange={this.handleChange}
                  />
                  <p className="error">
                    {this.state.registrationFormError.password}
                  </p>
                </div>

                <div className="card-footer">
                  <button> Register</button>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default App;
