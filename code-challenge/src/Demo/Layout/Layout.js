import React, { Component } from "react";
import Wrapper from "./Wrapper";
import Navigation from "../Nav/Nav";
import Registration from "../Register/Register";
import Cart from "../Ecom/Cart/Cart";

class Layout extends Component {
  state = {
    open: false
  };
  handleModalOpen = () => {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
  };

  render() {
    return (
      <Wrapper>
        <Navigation
          togglemodal={this.handleModalOpen}
          togglecart={this.props.togglecart}
          orders={this.props.orders}
        />
        <main className="content">{this.props.children}</main>
        <Registration open={this.state.open} closed={this.handleModalOpen} />
      </Wrapper>
    );
  }
}

export default Layout;
