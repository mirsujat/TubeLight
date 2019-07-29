import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/simple-form">Simple Form with Hooks</Link>
    </li>
    <li>
      <Link to="/form">Form with No Validation</Link>
    </li>
    <li>
      <Link to="/form-validation">Form with Validation</Link>
    </li>
    <li>
      <Link to="/api/articles">Articles</Link>
    </li>
  </ul>
);

export default Navbar;
