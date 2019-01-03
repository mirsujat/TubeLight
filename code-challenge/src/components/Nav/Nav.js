import React, { Component } from "react";
import { NavLink } from "react-router-dom";

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
            <NavLink
              to="/register"
              onClick={this.handleModalOpen}
              closed={this.handleModalOpen}
            >
              Register
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
