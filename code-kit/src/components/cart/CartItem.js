import React, { Fragment } from "react";

const CartItem = ({ name, imageUrl, price }) => (
  <Fragment>
    <div className="cart-item">
      <div className="cart-item-img">
        <img src={imageUrl} alt="product" className="cart-item-img" />
      </div>
      <div className="cart-item-title">{name}</div>
      <div className="cart-item-price">${price}</div>
    </div>
  </Fragment>
);

export default CartItem;
