import React, { Component, Fragment } from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Search from "@material-ui/icons/Search";
import InputDefault from "./InputDefault.jsx";
import demoStyle from "./demoStyle.jsx";

class CustomInput extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <InputDefault
          white
          inputRootCustomClasses={classes.inputRootCustomClasses}
          formControlProps={{
            className: classes.formControl
          }}
          inputProps={{
            placeholder: "Search",
            inputProps: {
              "aria-label": "Search",
              className: classes.searchInput
            }
          }}
        />
      </Fragment>
    );
  }
}

export default withStyles(demoStyle)(CustomInput);
