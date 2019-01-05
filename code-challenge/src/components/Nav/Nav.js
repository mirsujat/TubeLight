import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Registration from "../Register/Register";
import Cart from "../Ecom/Cart/Cart";

class Navigation extends Component {
  state = {
    open: false,
    cartopen: false
  };
  handleModalOpen = () => {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
  };
  handleCartOpen = () => {
    this.setState(prevState => {
      return { cartopen: !prevState.cartopen };
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
          <li onClick={this.handleCartOpen}>
            <i className="fas fa-cart-plus" />
            <span>{0}</span>
          </li>
        </ul>
        <Registration open={this.state.open} closed={this.handleModalOpen} />
        <Cart cartopen={this.state.cartopen} />
      </div>
    );
  }
}

export default Navigation;
