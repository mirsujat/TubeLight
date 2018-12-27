import React, { Component } from "react";
import Products from "./products";
import "./App.css";

class App extends Component {
  state = {
    data: { ...Products },
    selectId: null,
    order: null
  };
  //! TODO
  // method-1: select a product to buy
  // method-2: process the order as user specified
  // method-3: submit order and added to cart
  // method-4: calculate total price from ordered products
  // method-5: handle modal open and close
  // method-6: handle cart open and close
  // method-7: validate user input
  // method-8: remove order from cart

  //! select product by id
  selectId = id => {
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
  };

  render() {
    const { data } = this.state;
    let content = <div>There is no data to show.</div>;
    if (data) {
      content = data.products.map(product => {
        return (
          <div className="card product" key={product.id}>
            <div>Name: {product.title}</div>
            <div>Description: {product.description}</div>
            <div>AvailableSizes: {product.availableSizes}</div>
            <div>Price: {product.price}</div>
            <button onClick={() => this.selectId(product.id)}>Buy Now</button>
          </div>
        );
      });
    }

    return (
      <div className="app">
        <div className="header">
          <div className="btn">
            <i class="fas fa-cart-plus">0</i>
          </div>
        </div>
        <div className="products">{content}</div>
      </div>
    );
  }
}

export default App;
