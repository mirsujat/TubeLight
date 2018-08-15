import React, { Component } from 'react';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "../Grid/GridContainer.jsx";
import GridItem from "../Grid/GridItem.jsx";
import Button from './button.jsx';
import demoStyle from './demoStyle.jsx';


class ButtonDemo extends Component {
  render() {
    const { classes } = this.props;
    return(
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Basic Elements</h2>
        </div>
        <div id="buttons">
          <div className={classes.title}>
            <h3>
              Buttons
                <br />
              <small>Pick your style</small>
            </h3>
          </div>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <Button color="primaryColor">Default</Button>
              <Button color="primaryColor" round>
                round
                </Button>
              <Button color="primaryColor" round>
                <Favorite className={classes.icons} /> with icon
                </Button>
              <Button justIcon round color="primaryColor">
                <Favorite className={classes.icons} />
              </Button>
              <Button color="primaryColor" simple>
                simple
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
              <Button color="primaryColor" size="sm">
                Small
                </Button>
              <Button color="primaryColor">Regular</Button>
              <Button color="primaryColor" size="lg">
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
              <Button color="primaryColor">Primary</Button>
              <Button color="infoColor">Info</Button>
              <Button color="successColor">Success</Button>
              <Button color="warningColor">Warning</Button>
              <Button color="dangerColor">Danger</Button>
              <Button color="goldColor">Rose</Button>
            </GridItem>
          </GridContainer>
        </div>
    )
  }
}

export default withStyles(demoStyle)(ButtonDemo);