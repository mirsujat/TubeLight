import React, { Component } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Favorite from "@material-ui/icons/Favorite";
// core components
import GridContainer from "../Grid/GridContainer.jsx";
import GridItem from "../Grid/GridItem.jsx";
import Button from "./Button.jsx";
import demoStyle from "./demoStyle.jsx";

class ButtonDemo extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Button</h2>
            <Button color="info">Default</Button>
            <Button color="primary" round>
              round
            </Button>
            <Button color="white">White</Button>
            <Button color="gold" round>
              <Favorite className={classes.icons} /> with icon
            </Button>
            <Button justIcon round color="danger">
              <Favorite className={classes.icons} />
            </Button>
            <Button color="success">White</Button>
            <Button disabled>Disabled</Button>
            <Button color="primary" simple>
              simple
            </Button>
            <Button color="transparent" transparent>
              Transparent
            </Button>
          </GridItem>
        </GridContainer>
        <div className={classes.title}>
          <h3>
            <small>Pick your size</small>
          </h3>
        </div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <Button color="primary" size="sm">
              Small
            </Button>
            <Button color="primary">Regular</Button>
            <Button color="primary" size="lg">
              Large
            </Button>
          </GridItem>
        </GridContainer>
        <div className={classes.title}>
          <h3>
            <small>Pick your color</small>
          </h3>
        </div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <Button>Default</Button>
            <Button color="primary">Primary</Button>
            <Button color="info">Info</Button>
            <Button color="white">White</Button>
            <Button color="success">Success</Button>
            <Button color="warning">Warning</Button>
            <Button color="danger">Danger</Button>
            <Button color="gold">Gold</Button>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(demoStyle)(ButtonDemo);
