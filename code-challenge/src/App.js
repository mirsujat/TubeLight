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
    currencyFormat: "$"
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

  handleOrderQuantity = e => {
    const { cart } = this.state;
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
              <div>
                {" "}
                Select Quantity:
                <select>
                  <option value={product.orderQuantity.one}>1</option>
                  <option value={product.orderQuantity.two}>2</option>
                  <option value={product.orderQuantity.three}>3</option>
                </select>
              </div>
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
