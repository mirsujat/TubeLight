import React, { Component } from "react";
import Products from "./products";
import Modal from "./Modal";

import "./App.css";
class App extends Component {
  state = {
    data: { ...Products },
    order: {},
    cart: [],
    open: false,
    cartopen: false,
    totalPrice: 0,
    currencyFormat: "$",
    orderFormError: {}
  };
  // Challenges
  // 1- Display all products -DONE
  // 2- Select a product to buy or order to buy -DONE
  // 3- Process the order as user specified - DONE
  // 4- submit order and added to cart -DONE
  // 5- handle cart open and close -DONE
  // 6- calculate totalPrice -DONE
  // 7- remove order from cart -DONE
  // 8- validate order form -DONE

  //! select a product to order
  selectById = id => {
    const { data } = this.state;
    const selectedProduct = data.products
      .filter(product => product.id === id)
      .reduce((obj, item) => {
        obj = item;
        obj.orderNumber = Date.now().toFixed();
        obj.amount = obj.price * obj.orderQuantity;
        obj.size = "";
        return obj;
      }, {});
    this.setState({ order: selectedProduct });
    this.handleModalOpen();
  };

  //! handle order as user specified
  handleOrder = e => {
    const updateOrder = { ...this.state.order };
    updateOrder[e.target.name] = e.target.value;
    updateOrder.amount = updateOrder.price * updateOrder.orderQuantity;
    this.setState({ order: updateOrder });
  };

  //! submit order and added to the cart
  handleOrderSubmit = e => {
    e.preventDefault();
    const { cart, order } = this.state;
    const isValid = this.validate();
    if (isValid) {
      cart.unshift(order);
      this.setState({ cart: cart, order: {}, open: false });
      this.totalPrice();
    }
  };

  //! Remove order form cart and recalculate totalPrice
  handleRemoveOrder = orderNumber => {
    const { cart } = this.state;
    const updatedCart = cart.filter(order => order.orderNumber !== orderNumber);
    const updatedTotalPrice = updatedCart.reduce(
      (accumulator, currentValue) => accumulator + currentValue.amount,
      0
    );
    this.setState({ cart: updatedCart, totalPrice: updatedTotalPrice });
  };

  //! Caluculate totalPrice
  totalPrice = () => {
    const { cart } = this.state;
    const totalPrice = cart.reduce(
      (accumulator, currentValue) => accumulator + currentValue.amount,
      0
    );
    this.setState({ totalPrice });
  };

  //! handle modal open
  handleModalOpen = () => {
    this.setState({ open: true });
  };
  handleModalClose = () => {
    this.setState({ open: false, order: {} });
  };

  //! handle cart open and close
  handleCartOpen = () => {
    this.setState(prevState => {
      return { cartopen: !prevState.cartopen };
    });
  };

  //! Validate order form
  validate = () => {
    const { order } = this.state;
    const orderFormError = {};
    let isValid = true;
    if (!order.size) {
      isValid = false;
      orderFormError.size = "You must select size!";
    }
    this.setState({ orderFormError });
    return isValid;
  };

  render() {
    const {
      data,
      order,
      cart,
      cartopen,
      totalPrice,
      currencyFormat,
      orderFormError
    } = this.state;
    let content = <div>There is no product to display.</div>;
    let shoppingCart = null;
    if (data) {
      content = data.products.map(product => {
        return (
          <div className="card product" key={product.id}>
            <p>Name: {product.title}</p>
            <p>Description: {product.description}</p>
            <p>Available Sizes: {product.availableSizes}</p>
            <p>
              Price: {product.currencyFormat} {product.price}
            </p>
            <button onClick={() => this.selectById(product.id)}>Buy Now</button>
          </div>
        );
      });
    }
    if (cartopen && cart) {
      shoppingCart = (
        <div className="card">
          <table>
            <caption>YOUR SHOPPING CART</caption>
            <thead>
              <tr>
                <td>#</td>
                <td>Order Number</td>
                <td>Product Name</td>
                <td>Description</td>
                <td>Unit Price($)</td>
                <td>Order Quantity</td>
                <td>Amount($)</td>
                <td>Remove</td>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => {
                return (
                  <tr key={item.orderNumber}>
                    <td>{index + 1}</td>
                    <td>{item.orderNumber}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>
                      {item.currencyFormat}{" "}
                      {parseFloat(item.price, 10).toFixed(2)}
                    </td>
                    <td>{item.orderQuantity}</td>
                    <td>
                      {item.currencyFormat}{" "}
                      {parseFloat(item.amount, 10).toFixed(2)}
                    </td>
                    <td
                      className="remove-btn"
                      onClick={() => this.handleRemoveOrder(item.orderNumber)}
                    >
                      Remove
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
                <td>TOTAL AMOUNT = </td>
                <td>
                  {currencyFormat} {parseFloat(totalPrice, 10).toFixed(2)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      );
    }

    return (
      <div className="app">
        <div className="header">
          <div onClick={this.handleCartOpen} className="btn">
            <i className="fas fa-cart-plus" />
            <span>{cart.length} orders</span>
          </div>
        </div>
        <div className="products">{content}</div>
        <div className="shopping-cart" open={this.state.cartopen}>
          {shoppingCart}
        </div>
        <Modal open={this.state.open} closed={this.handleModalClose}>
          <div className="card">
            <form className="reg-form" onSubmit={this.handleOrderSubmit}>
              <div className="form-field">
                <p>Name: {order.title}</p>
              </div>
              <div className="form-field">
                <p>Description: {order.description}</p>
              </div>
              <div className="form-field">
                <p>
                  Price: {order.currencyFormat}{" "}
                  {parseFloat(order.price, 10).toFixed(2)}
                </p>
              </div>
              <div className="form-field">
                <label>Please Select Size</label>
                <select
                  name="size"
                  value={order.size}
                  onChange={this.handleOrder}
                >
                  <option />
                  <option>X</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
                <p className="error">{orderFormError.size}</p>
              </div>
              <div className="form-field">
                <label>Please Select Quantity</label>
                <select
                  name="orderQuantity"
                  value={order.orderQuantity}
                  onChange={this.handleOrder}
                >
                  <option>{1}</option>
                  <option>{2}</option>
                  <option>{3}</option>
                  <option>{4}</option>
                  <option>{5}</option>
                  <option>{6}</option>
                  <option>{7}</option>
                  <option>{8}</option>
                  <option>{9}</option>
                  <option>{10}</option>
                </select>
              </div>
              <div className="form-field">
                <p>
                  Amount:
                  {order.currencyFormat}{" "}
                  {parseFloat(order.amount, 10).toFixed(2)}
                </p>
              </div>
              <div className="form-field">
                <button type="type">Submit Order</button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default App;
