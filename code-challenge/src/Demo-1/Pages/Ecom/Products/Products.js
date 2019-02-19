import React, { Component } from "react";
import products from "../../../../products";
import ListItem from "../ListItem/ListItem";

class ProductList extends Component {
  state = {
    data: { ...products }
  };
  render() {
    const { data } = this.state;
    let lists = <div>Loading...</div>;
    console.log(data);
    if (data) {
      lists = data.products.map(product => {
        return (
          <ListItem
            key={product.sku}
            title={product.title}
            description={product.description}
            size={product.availableSizes}
            currencyFormate={product.currencyFormat}
            price={product.price}
          />
        );
      });
    }
    return <div className="products">{lists}</div>;
  }
}

export default ProductList;
