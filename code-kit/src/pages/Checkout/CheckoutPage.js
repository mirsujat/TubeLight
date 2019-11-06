import React from "react";

const CheckoutPage = () => {
  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-header">
          <ul className="header-title">
            <li className="list-item photo">photo</li>
            <li className="list-item name">name</li>
            <li className="list-item quantity">quantity</li>
            <li className="list-item price">price</li>
            <li className="list-item remove">remove</li>
          </ul>
        </div>

        <div className="checkout-content">
          <ul className="content-body">
            <li className="photo">photo</li>
            <li className="name p-15">name</li>
            <li className="quantity p-15">quantity</li>
            <li className="price p-15">price</li>
            <li className="remove p-15">remove</li>
          </ul>
        </div>
        <div className="checkout-content">
          <ul className="content-body">
            <li className="photo">photo</li>
            <li className="name p-15">name</li>
            <li className="quantity p-15">quantity</li>
            <li className="price p-15">price</li>
            <li className="remove p-15">remove</li>
          </ul>
        </div>
        <div className="checkout-content">
          <ul className="content-body">
            <li className="photo">photo</li>
            <li className="name p-15">name</li>
            <li className="quantity p-15">quantity</li>
            <li className="price p-15">price</li>
            <li className="remove p-15">remove</li>
          </ul>
        </div>
        <div className="checkout-content">
          <ul className="content-body">
            <li className="photo">photo</li>
            <li className="name p-15">name</li>
            <li className="quantity p-15">quantity</li>
            <li className="price p-15">price</li>
            <li className="remove p-15">remove</li>
          </ul>
        </div>

        <div className="checkout-footer">
          <button className="checkout-btn">checkout</button>
        </div>
      </div>
    </div>
  );
};
export default CheckoutPage;
