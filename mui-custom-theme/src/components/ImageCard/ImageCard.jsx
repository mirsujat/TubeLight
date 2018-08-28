import React, { Component } from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "../Grid/GridContainer.jsx";
import GridItem from "../Grid/GridItem.jsx";
import imageStyle from "./imageStyle.jsx";
import SummerGreen from "../../assets/img/photo/p1.jpg";
import SummerBeauty from "../../assets/img/photo/p2.jpg";
import SummerHot from "../../assets/img/photo/p3.jpg";
import SummerBaby from "../../assets/img/photo/p4.jpg";

class ImageCard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="images">
            <div className={classes.title}>
              <h2>Images</h2>
            </div>
            <br />
            <GridContainer>
              <GridItem xs={12} sm={2}>
                <h4>Rounded Image</h4>
                <img
                  src={SummerGreen}
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                />
              </GridItem>
              <GridItem xs={12} sm={2} className={classes.marginLeft}>
                <h4>Circle Image</h4>
                <img
                  src={SummerBeauty}
                  alt="..."
                  className={classes.imgRoundedCircle + " " + classes.imgFluid}
                />
              </GridItem>
              <GridItem xs={12} sm={2} className={classes.marginLeft}>
                <h4>Rounded Raised</h4>
                <img
                  src={SummerHot}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={2} className={classes.marginLeft}>
                <h4>Circle Raised</h4>
                <img
                  src={SummerBaby}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRoundedCircle +
                    " " +
                    classes.imgFluid
                  }
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(imageStyle)(ImageCard);
