import React from "react";

const Cart = () => {
  return (
    <div className="cart-container">
      <div className="cart">
        <div className="cart-body">
          <ul className="cart-content">
            <li className="cart-img">
              <img
                src="https://i.ibb.co/ZYW3VTp/brown-brim.png"
                alt="product"
              />
            </li>
            <li className="cart-title">Product Name for Shows</li>
            <li className="cart-price">$25</li>
          </ul>
        </div>
      </div>
      <div className="cart-footer">
        <button className="cart-btn">checkout</button>
      </div>
    </div>
  );
};

export default Cart;
