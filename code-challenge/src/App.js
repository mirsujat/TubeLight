import React, { Component } from "react";
import Products from "./products";
import Modal from "./Modal";
import "./App.css";

class App extends Component {
  state = {
    data: { ...Products },
    selectId: null,
    order: {},
    cart: [],
    open: false
  };
  //! TODO
  // method-1: select a product to buy -DONE
  // method-2: process the order as user specified -DONE
  // method-3: submit order and added to cart -DONE
  // method-4: calculate total price from ordered products
  // method-5: handle modal open and close -DONE
  // method-6: handle cart open and close
  // method-7: validate user input
  // method-8: remove order from cart

  //! select product by id
  handleSelectId = id => {
    const { data } = this.state;
    const selectId = data.products
      .filter(product => product.id === id)
      .reduce((obj, item) => {
        obj = item;
        obj.orderNumber = Date.now().toFixed();
        obj.amount = obj.price * obj.orderQuantity;
        return obj;
      }, {});
    this.setState({ selectId: selectId, order: selectId });
    this.handleModalOpen();
  };
  //! Process the order and add it to cart
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
    cart.unshift(order);
    this.setState({ cart: cart, order: {}, selectId: null, open: false });
  };

  //! handle Modal open
  handleModalOpen = () => {
    this.setState({ open: true });
  };
  handleModalClosed = () => {
    this.setState({ open: false, order: {}, selectId: null });
  };

  render() {
    const { data, order, cart } = this.state;
    let content = <div>There is no data to show.</div>;
    if (data) {
      content = data.products.map(product => {
        return (
          <div className="card product" key={product.id}>
            <div>Name: {product.title}</div>
            <div>Description: {product.description}</div>
            <div>AvailableSizes: {product.availableSizes}</div>
            <div>Price: {product.price}</div>
            <button onClick={() => this.handleSelectId(product.id)}>
              Buy Now
            </button>
          </div>
        );
      });
    }

    return (
      <div className="app">
        <div className="header">
          <div className="btn">
            <i class="fas fa-cart-plus" />
            <span>{cart.length}</span>
          </div>
        </div>
        <div className="products">{content}</div>
        <Modal
          open={this.state.open}
          closed={this.handleModalClosed}
          onSubmit={this.handleOrderSubmit}
        >
          <div className="card">
            <form className="reg-form" onSubmit={this.handleOrderSubmit}>
              <p>Name: {order.title}</p>
              <p>Description: {order.description}</p>
              <p>
                Price:{order.currencyFormat} {order.price}
              </p>
              {}{" "}
              <div className="form-field">
                <label>Please Select Size</label>
                <select
                  name="size"
                  value={order.size}
                  onChange={this.handleOrder}
                >
                  <option>X</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
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
                  Amount: {order.currencyFormat}{" "}
                  {parseFloat(order.amount, 10).toFixed(2)}
                </p>
              </div>
              <div className="form-field">
                <button type="submit">Submit Order</button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default App;
