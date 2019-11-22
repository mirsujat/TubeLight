import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Modal from "../modal/Modal";
import Card from "../card/Card";
import RegistrationPage from "../../pages/Registration/RegistrationPage";
import Context from "../../context/Context";
import Cart from "../cart/Cart";

const Header = () => {
  const {
    cartOpen,
    toggleCartOpen,
    itemsCount,
    open,
    toggleModalOpen
  } = useContext(Context);
  return (
    <div className="header" data-testid="header">
      <div className="nav-bar">
        <ul className="nav" data-testid="nav">
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
            <span className="cart-count">[{itemsCount}]</span>
          </li>
        </ul>
        {cartOpen ? <Cart></Cart> : null}
      </div>

      <Modal open={open} closed={toggleModalOpen}>
        <Card>
          <RegistrationPage></RegistrationPage>
        </Card>
      </Modal>
    </div>
  );
};

export default Header;
