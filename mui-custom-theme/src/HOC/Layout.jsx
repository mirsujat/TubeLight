import React, { Component } from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Wrapper from "./Wrapper";
import Topnav from "../views/sections/Topnav.jsx";
import Footer from "../views/sections/Footer/Footer.jsx";
import layoutStyle from "./layoutStyle.jsx";

class Layout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Wrapper>
        <Topnav />
        <main className={classes.content}>{this.props.children}</main>
        <Footer />
      </Wrapper>
    );
  }
}

export default withStyles(layoutStyle)(Layout);
