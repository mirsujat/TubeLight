import React, { Component, Fragment } from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "../../../Grid/GridItem.jsx";
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
      <Fragment>
        <GridItem xs={12} sm={12} md={3}>
          <Card className={classes.card}>
            <CardHeader plain color="default">
              Featured
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Special title treatment</h4>
              <p>
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Button color="white">Do something</Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card className={classes.card}>
            <CardHeader plain color="primary">
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
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card className={classes.card}>
            <CardHeader plain color="success">
              Featured
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Special title treatment</h4>
              <p>
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Button color="success">Do something</Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card className={classes.card}>
            <CardHeader plain color="gold">
              Featured
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Special title treatment</h4>
              <p>
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Button color="gold">Do something</Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card className={classes.card}>
            <CardHeader plain color="info">
              Featured
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Special title treatment</h4>
              <p>
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Button color="info">Do something</Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card className={classes.card}>
            <CardHeader plain color="warning">
              Featured
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Special title treatment</h4>
              <p>
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Button color="warning">Do something</Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card className={classes.card}>
            <CardHeader plain color="danger">
              Featured
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Special title treatment</h4>
              <p>
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Button color="danger">Do something</Button>
            </CardBody>
          </Card>
        </GridItem>
      </Fragment>
    );
  }
}

export default withStyles(style)(HeaderCard);
