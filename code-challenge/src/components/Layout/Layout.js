import React, { Component } from "react";
import Wrapper from "./Wrapper";
import Navigation from "../Nav/Nav";
import Registration from "../Register/Register";
import Cart from "../Ecom/Cart/Cart";

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
      <Wrapper>
        <Navigation
          togglemodal={this.handleModalOpen}
          togglecart={this.handleCartOpen}
        />
        <main className="content">{this.props.children}</main>
        <Cart cartopen={this.state.cartopen} />
        <Registration open={this.state.open} closed={this.handleModalOpen} />
      </Wrapper>
    );
  }
}

export default Layout;
