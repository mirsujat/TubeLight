import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "../../../components/Grid/GridContainer.jsx";
import GridItem from "../../../components/Grid/GridItem.jsx";
import headerStyle from "./headerStyle.jsx";

const header = props => {
  const { classes } = props;
  return (
    <section className={classes.headerSection}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <h3>Mui React Custom Theme: Based on</h3>
          <h6>React @16.4.3</h6>
          <h6>MUI @1.4.3</h6>
        </GridItem>
      </GridContainer>
    </section>
  );
};

export default withStyles(headerStyle)(header);
