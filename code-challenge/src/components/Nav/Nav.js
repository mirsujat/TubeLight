import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
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
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
