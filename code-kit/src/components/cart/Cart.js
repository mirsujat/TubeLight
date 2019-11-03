import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Context from "../../context/Context";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const { cart, toggleCartOpen } = useContext(Context);
  let content = <EmptyCart></EmptyCart>;
  if (cart.length > 0) {
    content = cart.map(item => {
      const { id, name, price, imageUrl } = item;
      return (
        <CartItem
          key={id}
          name={name}
          imageUrl={imageUrl}
          price={price}
        ></CartItem>
      );
    });
  }
  return (
    <div className="cart">
      <div className="cart-content">
        <div className="cart-body">{content}</div>
        <div className="cart-footer">
          <Link to="/checkout" onClick={toggleCartOpen}>
            <span className="checkout">checkout</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
