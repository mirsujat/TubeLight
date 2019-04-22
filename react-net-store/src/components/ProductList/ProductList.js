import React, { Component, Fragment } from "react";
import { storeProducts } from "../../data";
import Product from "../Product/Product";
import Title from "../Title/Title";
import { ProductConsumer } from "../context/context";

class ProductList extends Component {
  state = {
    products: storeProducts
  };
  render() {
    return (
      <Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  return <h1>{value}</h1>;
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </Fragment>
      //<Product />
    );
  }
}

export default ProductList;
