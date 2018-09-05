import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import DonutLarge from "@material-ui/icons/DonutLarge";

import brandStyle from "./brandStyle.jsx";

const brand = props => {
  const { classes } = props;
  return (
    <div className={classes.brand}>
      <DonutLarge className={classes.icons} />
      <span className={classes.brandText}>Naam Mui Theme</span>
    </div>
  );
};

export default withStyles(brandStyle)(brand);
