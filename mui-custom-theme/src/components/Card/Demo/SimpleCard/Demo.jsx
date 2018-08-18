import React, { Component } from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import {
  cardTitle,
  cardLink,
  cardSubtitle
} from "../../../../assets/jss/common-rules.jsx";

const style = {
  ...imagesStyles,
  cardTitle,
  cardLink,
  cardSubtitle
};

class Cards extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Card style={{ width: "20rem" }}>
        <CardBody>
          <h4 className={classes.cardTitle}>Card Title</h4>
          <h6 className={classes.cardSubtitle}>Card Subtitle</h6>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a
            href="#pablo"
            className={classes.cardLink}
            onClick={e => e.preventDefault()}
          >
            Card link
          </a>
          <a
            href="#pablo"
            className={classes.cardLink}
            onClick={e => e.preventDefault()}
          >
            Another link
          </a>
        </CardBody>
      </Card>
    );
  }
}

export default withStyles(style)(Cards);
