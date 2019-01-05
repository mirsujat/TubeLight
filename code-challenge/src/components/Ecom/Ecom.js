import React, { Component } from "react";
import Products from "../../products";

class Ecom extends Component {
  state = {
    data: { ...Products }
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
    return <div className="e-com">{content}</div>;
  }
}

export default Ecom;
