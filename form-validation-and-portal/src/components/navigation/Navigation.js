import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Modal from "../dialog/Dialog";
import LoginForm from "../user/LoginForm";

class Navigation extends Component {
  state = {
    open: false
  };

  handleModalOpen = () => {
    this.setState({ open: true });
  };
  handleModalClose = () => {
    this.setState({ open: false });
  };
  render() {
    return (
      <div className="header">
        <ul className="nav">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
          <li>
            <NavLink to="/newuser">New User</NavLink>
          </li>
          <li>
            <NavLink to="/search">Search IP</NavLink>
          </li>
          <li>
            <NavLink to="/validation-on-submit">ValidationOnSubmit</NavLink>
          </li>
          <li>
            <NavLink to="/async-validation">Async Validation</NavLink>
          </li>
          <li>
            <NavLink to="/validate-before-submit">ValidateBeforeSubmit</NavLink>
          </li>
          <li>
            <NavLink to="/user-friendly-validation">
              User Friendly Validation
            </NavLink>
          </li>
          <li onClick={this.handleModalOpen}>
            <NavLink to="/">Login</NavLink>
          </li>
        </ul>

        <Modal open={this.state.open} closed={this.handleModalClose}>
          <button onClick={this.handleModalClose} className="close-btn">
            Close
          </button>
          <LoginForm />
        </Modal>
      </div>
    );
  }
}

export default Navigation;
