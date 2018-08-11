import React, { Component, Fragment } from "react";

// @material-ui/core components
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Search from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputDefault from "./InputDefault.jsx";
import demoStyle from "./inputDefaultStyle.jsx";

class CustomInput extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <InputDefault
          id="material"
          inputRootCustomClasses={classes.inputRootCustomClasses}
          formControlProps={{ className: classes.formControl }}
          inputProps={{
            placeholder: "Search",
            disableUnderline: true,
            endAdornment: (
              <InputAdornment>
                <Search />
              </InputAdornment>
            )
          }}
        />
      </Fragment>
    );
  }
}

export default withStyles(demoStyle)(CustomInput);
