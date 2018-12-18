import React, { Component } from "react";
import Axios from "axios";

import "./App.css";
import Modal from "./Modal";

const initRegForm = {
  username: "",
  email: "",
  password: ""
};
class App extends Component {
  state = {
    searchTerm: "me",
    user: "",
    error: "",
    loading: false,
    formError: {
      searchTermError: ""
    },
    fields: { ...initRegForm },
    regFormError: { ...initRegForm },
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

  handleModalOpen = () => {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
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
            <div className="card-header">
              <h3>REGISTER NOW!</h3>
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
      </div>
    );
  }
}

export default App;
