import React, { Component } from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Cart from "../Pages/Ecom/Cart/Cart";

class Layout extends Component {
  state = {
    open: false,
    cartopen: false
  };
  handleModalOpen = () => {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
  };

  handleCartOpen = () => {
    this.setState(prevState => {
      return { cartopen: !prevState.cartopen };
    });
  };

  render() {
    return (
      <div className="layout">
        <Nav clicked={this.handleModalOpen} cartclicked={this.handleCartOpen} />
        <main className="main">
          {this.props.children}
          <Cart open={this.state.cartopen} />
        </main>
        <Footer />
        <Register open={this.state.open} closed={this.handleModalOpen} />
      </div>
    );
  }
}

export default Layout;
