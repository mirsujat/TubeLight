import React, { Component } from "react";
import Products from "./products";

import "./App.css";
class App extends Component {
  state = {
    data: { ...Products },
    order: {}
  };
  // Challenges
  // 1- Display all products -DONE
  // 2- Select a product to buy or order to buy -DONE

  //! select a product to order
  selectById = id => {
    const { data } = this.state;
    const selectedProduct = data.products
      .filter(product => product.id === id)
      .reduce((obj, item) => {
        obj = item;
        obj.orderNumber = Date.now().toFixed();
        obj.amount = obj.price * obj.orderQuantity;
        return obj;
      }, {});
    this.setState({ order: selectedProduct });
  };

  render() {
    const { data } = this.state;
    let content = <div>There is no product to display.</div>;
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

    return (
      <div className="app">
        <div className="header">
          <div>
            <i className="fas fa-cart-plus" />
            <span>0</span>
          </div>
        </div>
        <div className="products">{content}</div>
      </div>
    );
  }
}

export default App;
