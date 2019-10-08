import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem
} from "../../redux/cart/cart.actions";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckoutItemContainer = ({
  cartItem,
  clearItem,
  addItem,
  removeItem
}) => (
  <CheckoutItem
    cartItem={cartItem}
    clearItem={clearItem}
    addItem={addItem}
    removeItem={removeItem}
  ></CheckoutItem>
);

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItemContainer);
