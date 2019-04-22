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

  addToCart = id => {
    console.log("====================================");
    console.log(`Hello from addToCart cart.id is ${id}`);
    console.log("====================================");
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
