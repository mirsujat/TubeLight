import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <ul className="nav-bar">
      <li className="nav-link">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-link">
        <Link to="/blog">Blog</Link>
      </li>
      <li className="nav-link">
        <Link to="/registration">Registration</Link>
      </li>
    </ul>
  </div>
);

export default Header;
