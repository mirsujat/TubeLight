import React, { Component } from "react";
import Axios from "axios";
import Modal from "./Modal";
import Products from "./products";
import RegForm from "./RegForm";

import "./App.css";

class App extends Component {
  state = {
    loading: false,
    open: false,
    data: { ...Products },
    cart: [],
    cartopen: false,
    totalPrice: 0,
    currencyFormat: "$",
    selectedProduct: {},
    order: {}
  };

  // This will select a product to buy
  buyNow = id => {
    const { data } = this.state;
    const selectedProduct = data.products
      .filter(product => product.id === id)
      .reduce((obj, item) => {
        obj = item;
        obj.orderNumber = Date.now().toFixed();
        obj.amount = 0;
        obj.amount = obj.price * obj.orderQuantity;
        return obj;
      }, {});
    this.setState({ selectedProduct, order: selectedProduct });
    this.handleModalOpen();
  };
  // Handle order amount product price multiplied by orderQauntity
  calculateAmount = (x, y) => {
    return Number.parseInt(x * y).toFixed(2);
  };
  // Handle order as user specified
  handleChange = e => {
    const { order } = this.state;
    // const order = selectedProduct;
    order.amount = order.price * order.orderQuantity;
    order[e.target.name] = e.target.value;
    this.setState({ order });
  };

  // Handle order submission and update the cart by adding new order
  orderSubmit = e => {
    e.preventDefault();
    const { cart, order } = this.state;
    cart.unshift(order);
    this.totalPrice();
    this.setState({ cart: cart, order: {}, selectedProduct: {}, open: false });
  };

  // Handle remove order from cart and recalculate the totalPrice
  removeFromCart = id => {
    const { cart } = this.state;
    let price = 0;
    const updatedCart = cart.filter(product => product.id !== id);
    const totalPrice = updatedCart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.amount;
    }, price);
    this.setState({ cart: updatedCart, totalPrice });
  };

  // Handle totalPrice calculation of all orders.
  totalPrice = () => {
    const { cart } = this.state;
    let initialValue = 0;
    let totalPrice = cart.reduce(
      (accumulator, currentValue) => accumulator + currentValue.amount,
      initialValue
    );
    this.setState({ totalPrice });
  };

  // Handle shopping cart open and close
  handleCartOpen = () => {
    this.setState(prevState => {
      return { cartopen: !prevState.cartopen };
    });
  };

  // Handle modal open and close
  handleModalOpen = () => {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
  };

  render() {
    const {
      data,
      cartopen,
      cart,
      totalPrice,
      currencyFormat,
      selectedProduct,
      order
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
                    <td>{item.title}</td>
                    <td>
                      {item.description || item.style}, Size: {item.size}
                    </td>
                    <td>{item.orderQuantity}</td>
                    <td>
                      <span>{item.currencyFormat}</span>
                      {item.price}
                    </td>
                    <td>
                      <span>{item.currencyFormat}</span>
                      {item.amount}
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
                <td>Total Price = </td>
                <td>
                  <span>{currencyFormat} </span>
                  {totalPrice}
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
                  value={selectedProduct.size}
                  onChange={this.handleChange}
                >
                  <option>X</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
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

export default App;
