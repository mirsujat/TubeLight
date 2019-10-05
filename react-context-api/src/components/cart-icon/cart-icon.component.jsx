import React from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIconComponent = ({ toggleCartHidden, itemCount }) => (
  <div
    className="cart-icon"
    onClick={() => toggleCartHidden()}
    data-testid="cart-icon-component"
  >
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

export default CartIconComponent;
