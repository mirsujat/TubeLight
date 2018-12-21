import React, { Component } from "react";
import Axios from "axios";
import Modal from "./Modal";
import Products from "./products";

import "./App.css";

const initRegForm = {
  username: "",
  email: "",
  password: ""
};
class App extends Component {
  state = {
    loading: false,
    fields: { ...initRegForm },
    regFormError: { ...initRegForm },
    open: false,
    data: { ...Products },
    cart: [],
    cartopen: false,
    totalPrice: 0,
    currencyFormat: "$",
    rowNumber: 0
  };
  componentDidMount() {
    console.log(this.state.data);
  }
  addToCart = id => {
    const data = { ...this.state.data };
    const { cart } = this.state;
    const product = data.products
      .filter(product => product.id === id)
      .reduce((obj, item) => {
        obj = item;
        return obj;
      }, {});
    cart.push(product);
    this.setState({ cart: cart });
    this.totalPrice();
  };

  totalPrice = () => {
    const { cart } = this.state;
    let price = 0;
    const totalPrice = cart
      .reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price;
      }, price)
      .toFixed(2);
    this.setState({ totalPrice });
  };

  //REGISTRATION FORM
  handleChange = e => {
    const { fields } = this.state;
    fields[e.target.name] = e.target.value;
    this.setState({ fields });
  };
  submitRegForm = e => {
    e.preventDefault();
    let fields = initRegForm;
    const isValid = this.validateRegForm();
    if (isValid) {
      console.log(this.state.fields);
      this.setState({ fields });
    }
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

  // Validate Reg Form
  validateRegForm = () => {
    const { fields } = this.state;
    const regFormError = {};
    let isValid = true;
    const pattern = {
      username: /^[\w\.-]{2,20}$/,
      email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
    };
    const errorMsg = {
      username:
        "Username must be alphanumeric[A-Za-z0-9_.-] and contain (2-20) Characters.",
      email: "Invalid e-mail address. i.e; test@gmail.com",
      password:
        "Password must be 6-20 characters which contain at least one numeric digit, one uppercase and one lowercase letter."
    };
    if (!fields.username.match(pattern.username)) {
      isValid = false;
      regFormError.username = errorMsg.username;
    }
    if (!fields.email.match(pattern.email)) {
      isValid = false;
      regFormError.email = errorMsg.email;
    }
    if (!fields.password.match(pattern.password)) {
      isValid = false;
      regFormError.password = errorMsg.password;
    }
    this.setState({ regFormError });
    return isValid;
  };

  render() {
    const { data, cartopen, cart, totalPrice, currencyFormat } = this.state;
    console.log("cartData: ", this.state.counter);
    console.log("cart length: ", cart.length);
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
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price ($)</th>
            </tr>
            {cart.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>
                    <span>{item.currencyFormat}</span>
                    {item.price}
                  </td>
                </tr>
              );
            })}
          </table>
          <div className="cart-footer">
            <div className="display-total">
              Total Price = <span>{currencyFormat} </span>
              {totalPrice}
            </div>
          </div>
        </div>
      );

      cart.map((item, i) => {
        return (
          <div key={i}>
            <div>{item.title}</div>
            <div>{item.price}</div>
          </div>
        );
      });
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
            <div className="card-header">
              <h1>REGISTER NOW!</h1>
            </div>
            <div className="card-body">
              <form onSubmit={this.submitRegForm} className="reg-form">
                <div className="form-field">
                  <label htmlFor="">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={this.state.fields.username}
                    onChange={this.handleChange}
                  />
                  <p className="error">{this.state.regFormError.username}</p>
                </div>
                <div className="form-field">
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    name="email"
                    value={this.state.fields.email}
                    onChange={this.handleChange}
                  />
                  <p className="error">{this.state.regFormError.email}</p>
                </div>
                <div className="form-field">
                  <label htmlFor="">Password</label>
                  <input
                    type="text"
                    name="password"
                    value={this.state.fields.password}
                    onChange={this.handleChange}
                  />
                  <p className="error">{this.state.regFormError.password}</p>
                </div>
                <div className="form-field">
                  <button type="submit">Register</button>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default App;
