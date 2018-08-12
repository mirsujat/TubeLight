import React, { Component, Fragment } from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Search from "@material-ui/icons/Search";

// Custom Component
import GridContainer from "../Grid/GridContainer.jsx";
import GridItem from "../Grid/GridItem.jsx";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputDefault from "./InputDefault.jsx";
import TextArea from "./TextArea.jsx";
import demoStyle from "./inputDefaultStyle.jsx";

class CustomInput extends Component {
  render() {
    const { classes } = this.props;

    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <InputDefault
            id="material"
            inputRootCustomClasses={classes.inputRootCustomClasses}
            formControlProps={{ className: classes.formControl }}
            inputProps={{
              placeholder: "Search",
              type: "search",
              disableUnderline: true,
              endAdornment: (
                <InputAdornment className={classes.adornmentRoot}>
                  <Search className={classes.adornmentIcon} />
                </InputAdornment>
              )
            }}
          />
        </GridItem>

        <GridItem xs={12} sm={12} md={6}>
          <InputDefault
            id="email"
            inputRootCustomClasses={classes.inputRootCustomClasses}
            formControlProps={{ className: classes.formControl }}
            inputProps={{
              placeholder: "example@gmail.com",
              type: "email",
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <span className={classes.inputLable}>Email: </span>
                </InputAdornment>
              )
            }}
          />

          <InputDefault
            id="username"
            inputRootCustomClasses={classes.inputRootCustomClasses}
            formControlProps={{ className: classes.formControl }}
            inputProps={{
              placeholder: "User Name",
              type: "text",
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <span className={classes.inputLable}>User Name: </span>
                </InputAdornment>
              )
            }}
          />

          <InputDefault
            id="password"
            inputRootCustomClasses={classes.inputRootCustomClasses}
            formControlProps={{ className: classes.formControl }}
            inputProps={{
              placeholder: "Password",
              type: "password",
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <span className={classes.inputLable}>Password: </span>
                </InputAdornment>
              )
            }}
          />

          <TextArea
            id="comment"
            inputRootCustomClasses={classes.inputRootCustomClasses}
            formControlProps={{ className: classes.formControlTextArea }}
            inputProps={{
              placeholder: "Comment...",
              tyep: "text",
              disableUnderline: true,
              multiline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <span className={classes.inputLable}>Comment: </span>
                </InputAdornment>
              )
            }}
          />
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(demoStyle)(CustomInput);
