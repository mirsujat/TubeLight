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
    <div className="empty-cart" data-testid="empty-cart">
      Your Cart Is Empty
    </div>
  );
  if (cart.length > 0) {
    content = cart.map(cartItem => {
      const { id, imageUrl, name, quantity, price } = cartItem;
      return (
        <div
          className="checkout-content"
          key={id}
          data-testid="checkout-content"
        >
          <div className="photo">
            <img src={imageUrl} alt="product" />
          </div>
          <div className="name">{name}</div>
          <div className="quantity">
            <span
              className="left-arrow"
              onClick={() => removeItemFromCart(cartItem)}
            >
              &#8249;
            </span>
            <span className="item-quantity">{quantity}</span>
            <span
              className="right-arrow"
              onClick={() => addItemToCart(cartItem)}
            >
              &#8250;
            </span>
          </div>
          <div className="price">${price}</div>
          <div className="remove" onClick={() => filterItemFromCart(cartItem)}>
            <span className="remove-item">X</span>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="checkout-container" data-testid="checkout-container">
      <div className="checkout-page">
        <div className="checkout-header" data-testid="checkout-header">
          <div className="photo">photo</div>
          <div className="name">name</div>
          <div className="quantity">quantity</div>
          <div className="price">$price</div>
          <div className="remove">remove</div>
        </div>
        <div className="checkout-body">
          {/* content */}
          {content}
          {/* content */}
        </div>
        <div className="checkout-footer" data-testid="checkout-footer">
          <div className="total">total=${totalPrice}</div>
          <button className="checkout-btn" data-testid="checkout-btn">
            checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
