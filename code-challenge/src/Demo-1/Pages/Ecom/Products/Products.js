import React, { Component } from "react";
import products from "../../../../products";
import ListItem from "../ListItem/ListItem";
import Cart from "../Cart/Cart";
import Layout from "../../../Layout/Layout";
import OrderForm from "../OrderForm/OrderForm";

class ProductList extends Component {
  state = {
    data: { ...products },
    cart: [],
    selectedId: {},
    cartopen: false,
    open: false,
    formopen: false
  };

  handleSelectId = id => {
    const { data } = this.state;
    const selectedId = data.products
      .filter(product => product.id === id)
      .reduce((obj, item) => {
        obj = item;
        obj.orderNumber = Date.now();
        obj.amount = item.price * item.orderQuantity;
        return obj;
      }, {});
    this.setState({ selectedId });
    this.handleOrderFormOpen();
  };
  handleChange = e => {
    const { selectedId } = this.state;
    selectedId.amount = selectedId.price * selectedId.orderQuantity;
    selectedId[e.target.name] = e.target.value;
    this.setState({ selectedId });
  };
  handleOrderFormOpen = () => {
    this.setState({ open: true });
  };
  handleOrderFormClosed = () => {
    this.setState({ open: false });
  };
  handleCartOpen = () => {
    this.setState(prevState => {
      return { cartopen: !prevState.cartopen };
    });
  };
  render() {
    const { data, cart, selectedId } = this.state;
    console.log("SelectedId: ", this.state.selectedId);
    let lists = <div>Loading...</div>;
    let shoppingCart = null;
    let orderform = null;

    if (this.state.open) {
      orderform = (
        <OrderForm
          open={this.state.open}
          closed={this.handleOrderFormClosed}
          title={selectedId.title}
          description={selectedId.description}
          currencyFormat={selectedId.currencyFormat}
          price={selectedId.price}
          orderQuantity={selectedId.orderQuantity}
          amount={selectedId.amount}
          handleChange={this.handleChange}
        />
      );
    }
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
            clicked={() => this.handleSelectId(product.id)}
          />
        );
      });
    }
    if (cart && this.state.cartopen) {
      shoppingCart = (
        <Cart open={this.state.cartopen} cartclicked={this.handleCartOpen}>
          <table>
            <caption>YOUR SHOPPING CART</caption>
            <thead>
              <tr>
                <td>#</td>
                <td>Order Id</td>
                <td>Product Name</td>
                <td>Product Description</td>
                <td>Size</td>
                <td>Unit Price($)</td>
                <td>Amount($)</td>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => {
                return (
                  <tr key={index + 1}>
                    <td>{index + 1}</td>
                    <td>{item.orderNumber}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.availableSizes}</td>
                    <td>
                      {item.currencyFormat} {item.price}
                    </td>
                    <td>
                      {item.currencyFormat} {item.amount}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Cart>
      );
    }
    return (
      <Layout togglecart={this.handleCartOpen}>
        <div className="products">
          {lists}
          {shoppingCart}
          {orderform}
        </div>
      </Layout>
    );
  }
}

export default ProductList;
