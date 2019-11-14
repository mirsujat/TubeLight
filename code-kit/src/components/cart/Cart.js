import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../context/Context";

const Cart = () => {
  const { cart, toggleCartOpen } = useContext(Context);
  let content = (
    <div className="empty-cart" data-testid="empty-cart">
      Your Cart Is Empty
    </div>
  );
  if (cart.length > 0) {
    content = cart.map(cartItem => {
      const { id, imageUrl, name, price } = cartItem;
      return (
        <div className="cart-content" key={id} data-testid="cart-content">
          <div className="cart-img">
            <img src={imageUrl} alt="product" />
          </div>
          <div className="cart-title">{name}</div>
          <div className="cart-price">${price}</div>
        </div>
      );
    });
  }
  return (
    <div className="cart-container" data-testid="cart-container">
      <div className="cart-wrapper">
        <div className="cart">
          <div className="cart-body">
            {/* content */}
            {content}
            {/* content */}
          </div>
        </div>
        <div className="cart-footer">
          <Link
            to="/checkout"
            className="cart-btn"
            data-testid="link-to-checkout-page"
          >
            <button
              className="cart-btn"
              onClick={toggleCartOpen}
              data-testid="cart-btn"
            >
              checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
