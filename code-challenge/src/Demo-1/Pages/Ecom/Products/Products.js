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
    currencyFormat: "$",
    totalPrice: 0
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
    this.handleOrderFormOpen();
    this.setState({ selectedId });
  };
  handleChange = e => {
    const { selectedId } = this.state;
    selectedId[e.target.name] = e.target.value;
    selectedId.amount = selectedId.price * selectedId.orderQuantity;
    this.setState({ selectedId });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { cart, selectedId } = this.state;
    cart.push(selectedId);
    this.setState({ cart, selectedId: null, open: false });
    this.handleTotalPrice();
  };
  // TODO: Calculate total price
  handleTotalPrice = () => {
    const { cart } = this.state;
    const totalPrice = cart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.amount;
    }, 0);
    this.setState({ totalPrice });
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
          price={selectedId.price.toFixed(2)}
          orderQuantity={selectedId.orderQuantity}
          amount={selectedId.amount.toFixed(2)}
          handleChange={this.handleChange}
          submit={this.handleSubmit}
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
          <table className="shopping-cart">
            <caption>YOUR SHOPPING CART</caption>
            <thead>
              <tr>
                <td>#</td>
                <td>Order Id</td>
                <td>Product Name</td>
                <td>Product Description</td>
                <td>Size</td>
                <td>Unit Price($)</td>
                <td>Order QTN</td>
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
                      {item.currencyFormat} {item.price.toFixed(2)}
                    </td>
                    <td>{item.orderQuantity}</td>
                    <td>
                      {item.currencyFormat} {item.amount.toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td className="empty" />
                <td className="empty" />
                <td className="empty" />
                <td className="empty" />
                <td className="empty" />
                <td className="empty" />
                <td>TOTAL AMOUNT =</td>
                <td>
                  {this.state.currencyFormat} {this.state.totalPrice.toFixed(2)}
                </td>
              </tr>
            </tfoot>
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
