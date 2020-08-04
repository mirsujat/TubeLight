import React from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import useModal from "../Modal/useModal";

const Navbar = () => {
  const { isShowing, toggle } = useModal();

  return (
    <div>
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
        <li>
          <Link to="/tabs">Tab Manager</Link>
        </li>
        <li>
          <Link to="/multiselect">Multiselect</Link>
        </li>
        <button
          className="button-default"
          onClick={() => console.log("Print to The Console.")}
        >
          Print Console
        </button>
        <button className="button-default" onClick={toggle}>
          Show Modal
        </button>
      </ul>
      <Modal isShowing={isShowing} hide={toggle} />
    </div>
  );
};

export default Navbar;
