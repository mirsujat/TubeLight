import React from "react";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart-content">
        <div className="cart-body">
          <div className="cart-item">
            <div className="cart-item-img">item img</div>
            <div className="cart-item-title">cart item title for women</div>
            <div className="cart-item-price">$24</div>
          </div>
          <div className="cart-item">
            <div className="cart-item-img">item img</div>
            <div className="cart-item-title">
              cart item title for sneakers for man
            </div>
            <div className="cart-item-price">$24</div>
          </div>
        </div>
        <div className="cart-footer">
          <span className="checkout">checkout</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
