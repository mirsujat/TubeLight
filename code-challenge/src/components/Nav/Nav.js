import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = props => {
  return (
    <div className="header">
      <ul>
        <li>
          <NavLink to="/">Ecom</NavLink>
        </li>
        <li>
          <NavLink to="" onClick={props.togglemodal}>
            Register
          </NavLink>
        </li>
        <li onClick={props.togglecart}>
          <i className="fas fa-cart-plus" />
          <span>{props.orders}</span>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
