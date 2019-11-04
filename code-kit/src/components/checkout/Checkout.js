import React, { useContext } from "react";
import Context from "../../context/Context";

const Checkout = () => {
  const { cart, handleIncrement, handleDecrement } = useContext(Context);
  let content = (
    <div className="empty-checkout">
      <h5>Sorry! Nothing here left to chekcout.</h5>
    </div>
  );
  if (cart.length > 0) {
    content = cart.map(item => {
      const { id, imageUrl, name, quantity, price } = item;

      return (
        <div className="checkout-items" key={id}>
          <ul className="checkout-item">
            <li className="list item-img ">
              <img src={imageUrl} alt="product" />
            </li>
            <li className="list item-name">{name}</li>
            <li className="list item-quantity center">
              <span
                className="right-arrow"
                onClick={() => handleDecrement(item)}
              >
                &#8249;
              </span>
              <span className="quantity">{quantity}</span>
              <span
                className="left-arrow"
                onClick={() => handleIncrement(item)}
              >
                &#8250;
              </span>
            </li>
            <li className="list item-price center">${price}</li>
            <li className="list item-total center">$Total</li>
          </ul>
        </div>
      );
    });
  }

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
      {content}
    </div>
  );
};

export default Checkout;
