import React, { Component } from "react";
import Product from "../Product/Product";

class ProductList extends Component {
  state = {};
  render() {
    return (
      <div>
        <h3>Hello from product list</h3>
        <Product />
      </div>
    );
  }
}

export default ProductList;
