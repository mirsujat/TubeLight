import React, { Component } from "react";
import Products from "./products";

import "./App.css";
class App extends Component {
  state = {
    data: { ...Products }
  };
  // Challenges
  // 1- Display all products -DONE
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
          </div>
        );
      });
    }
    return (
      <div className="app">
        <div className="header">
          <div>
            <i class="fas fa-cart-plus" />
            <span>0</span>
          </div>
        </div>
        <div className="products">{content}</div>
      </div>
    );
  }
}

export default App;
