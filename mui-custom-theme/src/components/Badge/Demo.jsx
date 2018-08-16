import React, { Component } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "../Grid/GridContainer.jsx";
import GridItem from "../Grid/GridItem.jsx";
import Badge from "./badge.jsx";
import demoStyle from "./demoStyle.jsx";

class BadgeDemo extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.title}>
          <h3>
            <small>Pick your color</small>
          </h3>
        </div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <div className={classes.title}>
              <h3>Badges</h3>
            </div>
            <Badge>default</Badge>
            <Badge color="primary">primary</Badge>
            <Badge color="info">info</Badge>
            <Badge color="success">success</Badge>
            <Badge color="warning">warning</Badge>
            <Badge color="danger">danger</Badge>
            <Badge color="gold">gold</Badge>
            <Badge round>120</Badge>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(demoStyle)(BadgeDemo);
