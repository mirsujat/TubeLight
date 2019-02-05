import React, { Component } from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";

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
      <div className="layout">
        <Nav clicked={this.handleModalOpen} />
        <main className="main">{this.props.children}</main>
        <Footer />
        <Register open={this.state.open} closed={this.handleModalOpen} />
      </div>
    );
  }
}

export default Layout;
