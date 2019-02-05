import React from "react";

const Nav = props => (
  <div className="nav-bar">
    <ul className="nav-right">
      <li onClick={props.clicked}>Register</li>
    </ul>
  </div>
);

export default Nav;
