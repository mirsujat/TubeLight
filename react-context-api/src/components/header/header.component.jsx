import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";
import CartIconContainer from "../../containers/CartIconContainer/CartIconContainer";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartDropdownContainer from "../../containers/CartDropdownContainer/CartDropdownContainer";

import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => (
  <div className="header" data-testid="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIconContainer />
    </div>
    {hidden ? null : <CartDropdownContainer />}
  </div>
);

export default Header;
