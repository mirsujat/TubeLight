import React, { Component } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "../Grid/GridContainer.jsx";
import GridItem from "../Grid/GridItem.jsx";
import SimpleCard from "./Demo/SimpleCard/Demo.jsx";
import ImageCard from "./Demo/ImageCard/Demo.jsx";

import demoStyle from "./demoStyle.jsx";

class CardsDemo extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.title}>
          <h3>
            <small>Card for Displaying Products, Content, Modal etc.</small>
          </h3>
        </div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
            <div className={classes.title}>
              <h3>Simple Card </h3>
            </div>
            <SimpleCard />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <div className={classes.title}>
              <h3>Image Card </h3>
            </div>
            <ImageCard />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(demoStyle)(CardsDemo);
