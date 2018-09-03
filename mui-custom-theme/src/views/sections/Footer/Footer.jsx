import React, { Fragment } from "react";
import { Link } from "react-router-dom";

//Material-ui core component
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "@material-ui/core/Divider";
import GridContainer from "../../../components/Grid/GridContainer.jsx";
import GridItem from "../../../components/Grid/GridItem.jsx";
import footerStyle from "./footerStyle.jsx";

const footer = props => {
  const { classes } = props;
  return (
    <Fragment>
      <section className={classes.footer}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            list item
          </GridItem>
        </GridContainer>
      </section>
    </Fragment>
  );
};

export default withStyles(footerStyle)(footer);
