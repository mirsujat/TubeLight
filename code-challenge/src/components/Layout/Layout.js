import React, { Component } from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

class Layout extends Component {
  state = {};

  render() {
    return (
      <div className="layout">
        <Nav />
        <main className="content">{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
