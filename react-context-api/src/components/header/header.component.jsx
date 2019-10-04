import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../../containers/CartIcon/CartIcon";
import CartDropdown from "../../containers/CartDropdown/CartDropdown";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

const HeaderComponent = ({ currentUser, hidden }) => (
  <div className="header" data-testid="header-component">
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
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

export default HeaderComponent;
