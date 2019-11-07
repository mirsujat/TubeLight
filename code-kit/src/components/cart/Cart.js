import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../context/Context";

const Cart = () => {
  const { toggleCartOpen, cart } = useContext(Context);

  let content = <div className="empty-cart">Your Cart Is Empty</div>;
  if (cart.length > 0) {
    content = cart.map(cartItem => {
      const { id, imageUrl, name, price } = cartItem;
      return (
        <ul className="cart-content" key={id}>
          <li className="cart-img">
            <img src={imageUrl} alt="product" />
          </li>
          <li className="cart-title">{name}</li>
          <li className="cart-price">${price}</li>
        </ul>
      );
    });
  }
  return (
    <div className="cart-container">
      <div className="cart">
        <div className="cart-body">{content}</div>
      </div>

      <div className="cart-footer">
        <Link to="/checkout" onClick={toggleCartOpen}>
          <button className="cart-btn">checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
