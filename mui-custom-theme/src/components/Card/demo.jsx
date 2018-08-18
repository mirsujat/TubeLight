import React, { Component } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "../Grid/GridContainer.jsx";
import GridItem from "../Grid/GridItem.jsx";
import SimpleCard from "./Demo/SimpleCard/Demo.jsx";
import ImageCard from "./Demo/ImageCard/Demo.jsx";
import ContentCard from "./Demo/ContentCard/Demo.jsx";
import HeaderCard from "./Demo/HeaderCard/Demo.jsx";

import demoStyle from "./demoStyle.jsx";

class CardsDemo extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.title}>
          <h3>
            <small>
              Cards support a wide variety of content, including images, text,
              list groups, links, and more. Below are examples of what’s
              supported.
            </small>
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
          </GridItem>{" "}
          <GridItem xs={12} sm={12} md={6}>
            <div className={classes.title}>
              <h3>Content Card </h3>
            </div>
            <ContentCard />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <div className={classes.title}>
              <h3>Card With Header </h3>
            </div>
            <HeaderCard />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(demoStyle)(CardsDemo);
