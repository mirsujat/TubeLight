import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Context from "../../context/Context";
import Modal from "../modal/Modal";
import Card from "../card/Card";
import RegistrationPage from "../../pages/Registration/RegistrationPage";
import Cart from "../cart/Cart";

const Header = () => {
  const { open, toggleModalOpen, cartOpen, toggleCartOpen } = useContext(
    Context
  );
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
          <li className="nav-link" onClick={toggleModalOpen}>
            Logout
          </li>
          <li className="nav-link" onClick={toggleCartOpen}>
            Cart
            <span className="cart-count">[0]</span>
          </li>
        </ul>
      </div>
      {cartOpen ? <Cart></Cart> : null}
      <Modal open={open} closed={toggleModalOpen}>
        <Card>
          <RegistrationPage></RegistrationPage>
        </Card>
      </Modal>
    </div>
  );
};

export default Header;
