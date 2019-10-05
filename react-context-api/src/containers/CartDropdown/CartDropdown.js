import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import { selectCartItems } from "../../redux/cart/cart.selectors";

import CartDropdownComponent from "../../components/cart-dropdown/cart-dropdown.component";

const CartDropdown = props => (
  <CartDropdownComponent {...props}></CartDropdownComponent>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
