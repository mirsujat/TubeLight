import React from "react";
import { Link } from "react-router-dom";

import Modal from "../modal/Modal";
import Card from "../card/Card";
import RegistrationPage from "../../pages/Registration/RegistrationPage";

const Header = () => {
  return (
    <div className="header">
      <div className="nav-bar">
        <ul className="nav">
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="nav-link">Logout</li>

          <li className="nav-link">
            Cart
            <span className="cart-count">[0]</span>
          </li>
        </ul>
      </div>

      <Modal>
        <Card>
          <RegistrationPage></RegistrationPage>
        </Card>
      </Modal>
    </div>
  );
};

export default Header;
