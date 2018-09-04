import React, { Fragment } from "react";
import { Link } from "react-router-dom";

//Material-ui core component
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "../../../components/Button/button.jsx";
import GridContainer from "../../../components/Grid/GridContainer.jsx";
import GridItem from "../../../components/Grid/GridItem.jsx";
import footerStyle from "./footerStyle.jsx";

const footer = props => {
  const { classes } = props;
  return (
    <Fragment>
      <section className={classes.footer}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <h2 className={classes.footerTitle}>Mui Custom Theme</h2>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <Link to="/blog">
              <Button color="transparent" transparent>
                About Us
              </Button>
            </Link>
            <Link to="/blog">
              <Button color="transparent" transparent>
                Story
              </Button>
            </Link>
            <Link to="/blog">
              <Button color="transparent" transparent>
                Contact
              </Button>
            </Link>
            <Link to="/blog">
              <Button color="transparent" transparent>
                Portfolio
              </Button>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <h6 className={classes.credit}>
              Design and Develop by: mir.sujat@gmail.com, &copy;2018
            </h6>
          </GridItem>
        </GridContainer>
      </section>
    </Fragment>
  );
};

export default withStyles(footerStyle)(footer);
