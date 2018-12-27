import React, { Component } from "react";
import Products from "./products";
import "./App.css";

class App extends Component {
  state = {
    data: { ...Products }
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
            <button>Buy Now</button>
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
