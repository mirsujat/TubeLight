import React, { Component, Fragment } from "react";
import Product from "../Product/Product";
import Title from "../Title/Title";

class ProductList extends Component {
  state = {
    products: []
  };
  render() {
    return (
      <Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row" />
          </div>
        </div>
      </Fragment>
      //<Product />
    );
  }
}

export default ProductList;
