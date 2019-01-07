import React, { Component } from "react";
import Products from "../../products";
import Layout from "../Layout/Layout";
import Cart from "./Cart/Cart";

class Ecom extends Component {
  state = {
    data: { ...Products },
    cartopen: false,
    orders: 10
  };
  handleCartOpen = () => {
    this.setState(prevState => {
      return { cartopen: !prevState.cartopen };
    });
  };
  render() {
    const { data } = this.state;
    let content = <div>Loading...</div>;
    if (data) {
      content = data.products.map(product => {
        return (
          <div className="card product" key={product.id}>
            <p>Name: {product.title}</p>
            <p>Description: {product.description}</p>
            <p>Available Sizes: {product.availavleSizes}</p>
            <p>
              Price: {product.currencyFormat} {product.price}
            </p>
            <button>BUY NOW</button>
          </div>
        );
      });
    }

    return (
      <Layout orders={this.state.orders} togglecart={this.handleCartOpen}>
        <Cart cartopen={this.state.cartopen} />
        <div className="e-com">{content}</div>
      </Layout>
    );
  }
}

export default Ecom;
