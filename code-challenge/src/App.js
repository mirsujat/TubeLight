import React, { Component } from "react";
import Axios from "axios";
import Modal from "./Modal";
import Products from "./products";

import "./App.css";

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
    open: false,
    data: { ...Products }
  };
  componentDidMount() {
    console.log(this.state.data);
  }

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
    const { data } = this.state;
    let content = <div>There is no data to show.</div>;
    if (data) {
      content = data.products.map(product => {
        return (
          <div className="product" key={product.id}>
            <div className="title">{product.title}</div>
          </div>
        );
      });
    }

    return (
      <div className="app">
        <div className="header">
          <div />
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
