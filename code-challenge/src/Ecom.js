import React, { Component } from "react";
import Modal from "./Modal";
import Products from "./products";

import "./App.css";

class Ecom extends Component {
  state = {
    loading: false,
    open: false,
    data: { ...Products },
    cart: [],
    cartopen: false,
    totalPrice: Number,
    currencyFormat: "$",
    selectedProduct: {},
    order: {},
    orderFormError: {
      size: "",
      orderQauntity: ""
    }
  };
  /*  THE TODO LIST
 1. select a product to buy
 2. process order as user specified
 3. add order to cart
 4. remove order from cart 
 5. calculate total Price from all order placed onto cart
 6. handle shopping cart open and close
 7. handle modal open cand close
 8. validate order
 */

  // This will select a product to buy Method-1
  buyNow = id => {
    const { data } = this.state;
    const selectedProduct = data.products
      .filter(product => product.id === id)
      .reduce((obj, item) => {
        obj = item;
        obj.orderNumber = Date.now().toFixed();
        obj.size = "";
        obj.amount = obj.price;
        return obj;
      }, {});
    this.setState({ selectedProduct, order: selectedProduct });
    this.handleModalOpen();
  };

  // Handle order as user specified Method-2
  handleChange = e => {
    const updateOrder = { ...this.state.order };
    updateOrder[e.target.name] = e.target.value;
    updateOrder.amount = updateOrder.orderQuantity * updateOrder.price;
    this.setState({ order: updateOrder });
  };

  // Handle order submission and update the cart by adding new order Method-3
  orderSubmit = e => {
    e.preventDefault();
    const { cart, order } = this.state;
    const isValid = this.validateOrder();
    if (isValid) {
      cart.unshift(order);
      this.totalPrice();
      this.setState({
        cart: cart,
        order: {},
        selectedProduct: {},
        open: false
      });
    }
  };

  // Handle remove order from cart and recalculate the totalPrice Method-4
  removeFromCart = id => {
    const { cart } = this.state;
    let price = 0;
    const updatedCart = cart.filter(product => product.id !== id);
    const totalPrice = updatedCart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.amount;
    }, price);
    this.setState({ cart: updatedCart, totalPrice });
  };

  // Handle totalPrice calculation of all orders. Method-5
  totalPrice = () => {
    const { cart } = this.state;
    let initialValue = 0;
    let totalPrice = cart.reduce(
      (accumulator, currentValue) => accumulator + currentValue.amount,
      initialValue
    );
    this.setState({ totalPrice });
  };

  // Handle shopping cart open and close Method-6
  handleCartOpen = () => {
    this.setState(prevState => {
      return { cartopen: !prevState.cartopen };
    });
  };

  // Handle modal open and close Method-7
  handleModalOpen = () => {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
  };

  // Validate Order Method-8
  validateOrder = () => {
    const { order } = this.state;
    const orderFormError = {};
    let isValid = true;
    if (!order.size) {
      isValid = false;
      orderFormError.size = "Please select size.";
    }
    if (!order.orderQuantity < 0) {
      isValid = false;
      orderFormError.orderQuantity = "Please select quantity.";
    }
    this.setState({ orderFormError });
    return isValid;
  };

  render() {
    const {
      data,
      cartopen,
      cart,
      totalPrice,
      currencyFormat,
      selectedProduct,
      order,
      orderFormError
    } = this.state;

    let content = <div>There is no data to show.</div>;
    if (data) {
      content = data.products.map(product => {
        return (
          <div className="product" key={product.id}>
            <div className="card">
              <div>Name: {product.title}</div>
              <div>Style: {product.style}</div>
              <div>AvailableSizes: {product.availableSizes}</div>
              <div>
                Price:
                <span>{product.currencyFormat}</span> {product.price}
              </div>
              <div> Description: {product.description}</div>
              <button onClick={() => this.buyNow(product.id)}>BUY NOW</button>
            </div>
          </div>
        );
      });
    }
    let shoppingCart = null;
    if (cartopen && cart) {
      shoppingCart = (
        <div className="card">
          <table>
            <caption>Your Shopping List</caption>
            <thead>
              <tr>
                <th>#</th>
                <th>Order Number</th>
                <th>Name</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Unit Price ($)</th>
                <th>Amount ($)</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => {
                return (
                  <tr key={Math.random() * 100}>
                    <td>{index + 1}</td>
                    <td>{item.orderNumber}</td>
                    <td>{item.title}</td>
                    <td>
                      {item.description || item.style}, Size: {item.size}
                    </td>
                    <td>{item.orderQuantity}</td>
                    <td>
                      <span>{item.currencyFormat} </span>
                      {item.price}
                    </td>
                    <td>
                      <span>{item.currencyFormat} </span>
                      {item.amount.toFixed(2)}
                    </td>
                    <td onClick={id => this.removeFromCart(item.id)}>
                      <i className="fas fa-times" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>Total Price = </td>
                <td>
                  <span>{currencyFormat} </span>
                  {totalPrice.toFixed(2)}
                </td>
                <td />
              </tr>
            </tfoot>
          </table>
        </div>
      );
    }
    return (
      <div className="app">
        <div className="header">
          <div />
          <div>
            <button className="reg-btn" onClick={this.handleModalOpen}>
              Register
            </button>
            <button className="reg-btn" onClick={this.handleCartOpen}>
              <i className="fas fa-cart-plus">
                <span className="shop-cart-text">{this.state.cart.length}</span>
              </i>
            </button>
          </div>
        </div>
        <div className="products">{content}</div>
        <div className="shopping-cart" open={this.state.cartOpen}>
          {shoppingCart}
        </div>
        <Modal open={this.state.open} closed={this.handleModalOpen}>
          <div className="card">
            <form className="reg-form" onSubmit={this.orderSubmit}>
              <div className="form-field">
                <p>Title: {selectedProduct.title}</p>
              </div>
              <div className="form-field">
                <p>Description: {selectedProduct.description}</p>
              </div>
              <div className="form-field">
                <label>Please Select Size</label>
                <select
                  name="size"
                  value={order.size}
                  onChange={this.handleChange}
                >
                  <option>X</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
                <p className="error">{orderFormError.size}</p>
              </div>
              <p>Price: {selectedProduct.price}</p>
              <div className="form-field">
                <label>Please Select Quantity</label>
                <select
                  name="orderQuantity"
                  value={order.orderQuantity}
                  onChange={this.handleChange}
                >
                  <option>{1}</option>
                  <option>{2}</option>
                  <option>{3}</option>
                  <option>{4}</option>
                  <option>{5}</option>
                  <option>{6}</option>
                  <option>{7}</option>
                </select>
                <p className="error">{orderFormError.orderQauntity}</p>
              </div>
              <p>Amount: {order.amount}</p>
              <div className="form-field">
                <button type="submit">ADD TO CART</button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Ecom;
