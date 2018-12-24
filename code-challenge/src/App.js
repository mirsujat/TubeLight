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
    selectedProduct: ""
  };

  componentDidMount() {
    // console.log(this.state.data);
  }

  addToCart = id => {
    const { data, cart } = this.state;
    const product = data.products
      .filter(product => product.id === id)
      .reduce((obj, item) => {
        obj = item;

        obj.amount =
          obj.orderQuantity && obj.orderQuantity >= 2
            ? obj.orderQuantity * obj.price
            : obj.minOrderQuantity * obj.price;
        return obj;
      }, {});

    cart.unshift(product);
    this.setState({ cart: cart });
    console.log("cart: ", cart);
    this.totalPrice();
  };

  removeFromCart = id => {
    const { cart } = this.state;
    let price = 0;
    const updatedCart = cart.filter(product => product.id !== id);
    const totalPrice = updatedCart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.amount;
    }, price);
    this.setState({ cart: updatedCart, totalPrice });
  };

  totalPrice = () => {
    const { cart } = this.state;
    let updatedTotalPrice = { ...this.state.totalPrice };
    let price = 0;
    updatedTotalPrice = cart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.amount;
    }, price);
    this.setState({ totalPrice: updatedTotalPrice });
  };

  handleCartOpen = () => {
    this.setState(prevState => {
      return { cartopen: !prevState.cartopen };
    });
  };

  handleModalOpen = () => {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
  };

  render() {
    const { data, cartopen, cart, totalPrice, currencyFormat } = this.state;

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
              <button onClick={() => this.addToCart(product.id)}>
                BUY NOW
              </button>
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
                    <td>{item.description || item.style}</td>
                    <td>{item.minOrderQuantity}</td>
                    <td>
                      <span>{item.currencyFormat}</span>
                      {item.price.toFixed(2)}
                    </td>
                    <td>
                      <span>{item.currencyFormat}</span>
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
                <td>Total Price = </td>
                <td>
                  <span>{currencyFormat}</span>
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
          <form className="reg-form">
            <div className="form-field">
              <label>Title</label>
              <input type="text" name="title" value="title" />
            </div>
            <div className="form-field">
              <label>Description</label>
              <input type="text" name="description" value="description" />
            </div>
            <div className="form-field">
              <label>Size</label>
              <input type="text" name="size" value="size" />
            </div>
            <div className="form-field">
              <label>Quantity</label>
              <input type="text" name="quantity" value="quantity" />
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

export default App;
