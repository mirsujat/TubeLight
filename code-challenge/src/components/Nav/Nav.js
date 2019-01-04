import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Registration from "../Register/Register";

class Navigation extends Component {
  state = {
    open: false
  };
  handleModalOpen = () => {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
  };
  render() {
    return (
      <div className="header">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/ecom">Ecom</NavLink>
          </li>
          <li>
            <NavLink to="/register" onClick={this.handleModalOpen}>
              Register
            </NavLink>
          </li>
        </ul>
        <Registration open={this.state.open} closed={this.handleModalOpen} />
      </div>
    );
  }
}

export default Navigation;
