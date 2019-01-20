import React, { Component } from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Registration from "../Registration/Registration";

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
        <main className="content">{this.props.children}</main>
        <Footer />
        <Registration open={this.state.open} closed={this.handleModalOpen} />
      </div>
    );
  }
}

export default Layout;
