import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions.js";

import CartDropdownComponent from "../../components/cart-dropdown/cart-dropdown.component";

const CartDropdownContainer = ({ cartItems, toggleCartHidden }) => (
  <CartDropdownComponent
    cartItems={cartItems}
    toggleCartHidden={toggleCartHidden}
  ></CartDropdownComponent>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartDropdownContainer);
