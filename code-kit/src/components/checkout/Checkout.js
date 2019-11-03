import React from "react";
const Checkout = () => {
  return (
    <div className="checkout-page">
      <h1 className="title">Your Shopping Lists</h1>
      <div className="checkout-page-header">
        <ul className="checkout-header">
          <li className="checkout-title">Photo</li>
          <li className="checkout-title">Name</li>
          <li className="checkout-title ml-80">Quantity</li>
          <li className="checkout-title">Price</li>
          <li className="checkout-title">Total</li>
        </ul>
      </div>
      <div className="checkout-items">
        <ul className="checkout-item">
          <li className="list item-img ">Photo</li>
          <li className="list item-name">Name</li>
          <li className="list item-quantity center">Quantity</li>
          <li className="list item-price center">$Price</li>
          <li className="list item-total center">$Total</li>
        </ul>
      </div>
    </div>
  );
};

export default Checkout;
