import React, { Component, createContext } from "react";
import { storeProducts, detailProduct } from "../../data";

const ProductContext = createContext();

//Provider
// Consumer

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct
  };
  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };
  handleDetail = () => {
    console.log("====================================");
    console.log("hello from detail");
    console.log("====================================");
  };

  addTocart = () => {
    console.log("====================================");
    console.log("Hello from addToCart");
    console.log("====================================");
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addTocart: this.addTocart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
