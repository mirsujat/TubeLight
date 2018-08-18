import React, { Component } from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "../../Card.jsx";
import CardBody from "../../CardBody/CardBody.jsx";

import { card } from "../../../../assets/jss/common-rules.jsx";

const style = {
  card
};

class ContentCard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardBody>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CardBody>
      </Card>
    );
  }
}

export default withStyles(style)(ContentCard);
