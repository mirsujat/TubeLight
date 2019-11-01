import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Modal from "../modal/Modal";
import Card from "../card/Card";
import RegistrationPage from "../../pages/Registration/RegistrationPage";
import Context from "../../context/Context";

const Header = () => {
  const { open, auth, toggleModalOpen, toggleAuth } = useContext(Context);

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
          {auth ? (
            <li className="nav-link" onClick={toggleAuth}>
              Logout
            </li>
          ) : (
            <li className="nav-link" onClick={toggleModalOpen}>
              Register
            </li>
          )}
        </ul>
        <div className="nav-right">
          <span className="cart-icon">Cart</span>
        </div>
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
