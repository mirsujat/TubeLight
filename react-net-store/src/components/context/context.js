import React, { Component, createContext } from "react";

const ProductContext = createContext();

//Provider
// Consumer

class ProductProvider extends Component {
  state = {};
  render() {
    return (
      <ProductContext.Provider value="hello from context">
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
