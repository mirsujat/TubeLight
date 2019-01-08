import React, { Component } from "react";
import Products from "../../products";
import Layout from "../Layout/Layout";
import Cart from "./Cart/Cart";
import OrderForm from "./OrderForm/OrderForm";

class Ecom extends Component {
  state = {
    data: { ...Products },
    cartopen: false,
    orders: 10,
    open: false,
    formopen: false,
    selectedId: {}
  };
  buyNow = id => {
    const { data } = this.state;
    const selectedId = data.products
      .filter(product => product.id === id)
      .reduce((obj, item) => {
        obj = item;
        obj.orderNumber = Date.now();
        obj.amount = item.price;
        return obj;
      }, {});
    this.setState({ selectedId });
    this.handleModalOpen();
  };
  handleModalOpen = () => {
    this.setState({
      open: true,
      formopen: true
    });
  };
  handleModalClose = () => {
    this.setState({
      open: false,
      formopen: false,
      selectedId: {}
    });
  };
  handleCartOpen = () => {
    this.setState(prevState => {
      return { cartopen: !prevState.cartopen };
    });
  };
  render() {
    const { data, selectedId } = this.state;
    console.log(this.state.selectedId);
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
            <button onClick={id => this.buyNow(product.id)}>BUY NOW</button>
          </div>
        );
      });
    }

    return (
      <Layout orders={this.state.orders} togglecart={this.handleCartOpen}>
        <Cart cartopen={this.state.cartopen} />
        <div className="e-com">{content}</div>
        <OrderForm
          open={this.state.open}
          formopen={this.state.formopen}
          closed={this.handleModalClose}
          title={selectedId.title}
          description={selectedId.description}
          currencyFormat={selectedId.currencyFormat}
          price={selectedId.price}
          amount={selectedId.amount}
        />
      </Layout>
    );
  }
}

export default Ecom;
