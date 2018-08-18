import React, { Component } from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "../../Card.jsx";
import CardBody from "../../CardBody/CardBody.jsx";
import Button from "../../../Button/button.jsx";
import imageStyle from "../../../../assets/jss/styles/imageStyle.jsx";

import SamplePhoto from "../../../../assets/img/photo/sample-1.jpg";

import { card, cardTitle } from "../../../../assets/jss/common-rules.jsx";

const style = {
  ...imageStyle,
  card,
  cardTitle
};

class ImageCard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <img
          style={{ height: "160px", width: "100%", display: "block" }}
          className={classes.imgCardTop}
          src={SamplePhoto}
          alt="Card-img-cap"
        />
        <CardBody>
          <h4 className={classes.cardTitle}>Card title</h4>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Button color="white">Do something</Button>
        </CardBody>
      </Card>
    );
  }
}

export default withStyles(style)(ImageCard);
