import React, { Component } from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Wrapper from "./Wrapper";
import NavbarIconText from "../../components/Navbar/NavbarIconText.jsx";
import layoutStyle from "./layoutStyle.jsx";

class Layout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Wrapper>
        <NavbarIconText />

        <main className={classes.Content}>{this.props.children}</main>
      </Wrapper>
    );
  }
}

export default withStyles(layoutStyle)(Layout);
