import React, { Component } from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "../../Card.jsx";
import CardBody from "../../CardBody/CardBody.jsx";

import {
  card,
  cardTitle,
  cardLink,
  cardSubtitle
} from "../../../../assets/jss/common-rules.jsx";

const style = {
  card,
  cardTitle,
  cardLink,
  cardSubtitle
};

class SimpleCard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardBody>
          <h4 className={classes.cardTitle}>Card Title</h4>
          <h6 className={classes.cardSubtitle}>Card Subtitle</h6>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a
            href="#mir"
            className={classes.cardLink}
            onClick={e => e.preventDefault()}
          >
            Card link
          </a>
          <a
            href="#mir"
            className={classes.cardLink}
            onClick={e => e.preventDefault()}
          >
            Card link
          </a>
        </CardBody>
      </Card>
    );
  }
}

export default withStyles(style)(SimpleCard);
