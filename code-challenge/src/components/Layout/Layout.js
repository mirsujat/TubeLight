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
          cartopen={this.handleCartOpen}
        />
        <Registration open={this.state.open} closed={this.handleModalOpen} />
        <Cart open={this.state.cartopen} />
        <main className="content">{this.props.children}</main>
      </Wrapper>
    );
  }
}

export default Layout;
