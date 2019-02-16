import React from "react";
import { NavLink } from "react-router-dom";

const Nav = props => (
  <div className="nav-bar">
    <ul className="nav-right">
      <li>
        <NavLink to="/">Home</NavLink>{" "}
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>{" "}
      </li>
      <li onClick={props.clicked}>Register</li>
    </ul>
  </div>
);

export default Nav;
