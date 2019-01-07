import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Registration from "../Register/Register";
import Cart from "../Ecom/Cart/Cart";

const Navigation = props => {
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
          <NavLink to="/register" onClick={props.togglemodal}>
            Register
          </NavLink>
        </li>
        <li onClick={props.cartopen}>
          <i className="fas fa-cart-plus" />
          <span>{0}</span>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
