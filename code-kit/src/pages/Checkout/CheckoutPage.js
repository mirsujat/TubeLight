import React, { useContext } from "react";
import Context from "../../context/Context";

const CheckoutPage = () => {
  const {
    cart,
    addItemToCart,
    removeItemFromCart,
    filterItemFromCart,
    totalPrice
  } = useContext(Context);
  let content = (
    <div className="sorry">Sorry! You have nothing to checkout</div>
  );
  if (cart.length > 0) {
    content = cart.map(cartItem => {
      const { id, imageUrl, name, quantity, price } = cartItem;
      return (
        <div className="checkout-content" key={id}>
          <ul className="content-body">
            <li className="photo">
              <img src={imageUrl} alt="product" />
            </li>
            <li className="name p-15">{name}</li>
            <li className="quantity p-15">
              <span
                className="left-arrow"
                onClick={() => removeItemFromCart(cartItem)}
              >
                &#8249;
              </span>
              {quantity}
              <span
                className="left-arrow"
                onClick={() => addItemToCart(cartItem)}
              >
                &#8250;
              </span>
            </li>
            <li className="price p-15">${price}</li>
            <li className="remove p-15">
              <span
                className="delete"
                onClick={() => filterItemFromCart(cartItem)}
              >
                X
              </span>
            </li>
          </ul>
        </div>
      );
    });
  }
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

        {content}

        <div className="checkout-footer">
          <div className="total">total = ${totalPrice}</div>
          <button className="checkout-btn">checkout</button>
        </div>
      </div>
    </div>
  );
};
export default CheckoutPage;
