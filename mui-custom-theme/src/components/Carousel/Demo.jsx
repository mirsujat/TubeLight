import React, { Component } from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "../Grid/GridContainer.jsx";
import GridItem from "../Grid/GridItem.jsx";
import Carousel from "./Carousel.jsx";
import demoStyle from "./demoStyle.jsx";

class CarouselDemo extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.title}>
                <h3>Corousel</h3>
              </div>
              <Carousel />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(demoStyle)(CarouselDemo);
