import React, { Component } from "react";

import Wrapper from "./Wrapper";
import NavbarIconText from "../../components/Navbar/NavbarIconText.jsx";

import layoutStyle from "./layoutStyle.css";

class Layout extends Component {
  render() {
    return (
      <Wrapper>
        <NavbarIconText />

        <main className={Style.Content}>{this.props.children}</main>
      </Wrapper>
    );
  }
}

export default Layout;
