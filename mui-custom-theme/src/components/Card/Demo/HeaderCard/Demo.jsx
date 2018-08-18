import React, { Component } from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "../../Card.jsx";
import CardBody from "../../CardBody/CardBody.jsx";
import CardHeader from "../../CardHeader/CardHeader.jsx";
import Button from "../../../Button/button.jsx";

import { card, cardTitle } from "../../../../assets/jss/common-rules.jsx";

const style = {
  card,
  cardTitle
};

class HeaderCard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card} style={{ width: "20rem" }}>
        <CardHeader plain color="default">
          Featured
        </CardHeader>
        <CardBody>
          <h4 className={classes.cardTitle}>Special title treatment</h4>
          <p>
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <Button color="primary">Do something</Button>
        </CardBody>
      </Card>
    );
  }
}

export default withStyles(style)(HeaderCard);
