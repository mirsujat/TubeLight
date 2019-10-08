import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import CartIcon from "../../components/cart-icon/cart-icon.component";

const CartIconContainer = ({ toggleCartHidden, itemCount }) => (
  <CartIcon
    toggleCartHidden={toggleCartHidden}
    itemCount={itemCount}
  ></CartIcon>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIconContainer);
