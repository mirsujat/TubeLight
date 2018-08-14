import React, { Component } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import People from "@material-ui/icons/People";
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// Custom Component
import GridContainer from "../Grid/GridContainer.jsx";
import GridItem from "../Grid/GridItem.jsx";
import Input from "./Input.jsx";

class InputDemo extends Component {
  render() {
    return (
      <GridContainer>
        <GridItem xs={12} sm={4} md={4} lg={3}>
          <Input
            id="regular"
            inputProps={{ placeholder: "Regular" }}
            formControlProps={{ fullWidth: true }}
          />
        </GridItem>
        <GridItem xs={12} sm={4} md={4} lg={3}>
          <Input
            labelText="With floating label"
            id="float"
            formControlProps={{ fullWidth: true }}
          />
        </GridItem>
        <GridItem xs={12} sm={4} md={4} lg={3}>
          <Input
            labelText="Success input"
            id="success"
            success
            formControlProps={{ fullWidth: true }}
          />
        </GridItem>
        <GridItem xs={12} sm={4} md={4} lg={3}>
          <Input
            labelText="Error input"
            id="error"
            error
            formControlProps={{ fullWidth: true }}
          />
        </GridItem>
        <GridItem xs={12} sm={4} md={4} lg={3}>
          <Input
            labelText="With material Icons"
            id="material"
            formControlProps={{ fullWidth: true }}
            inputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <People />
                </InputAdornment>
              )
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={4} md={4} lg={3}>
          <Input
            labelText="With Font Awesome Icons"
            id="font-awesome"
            formControlProps={{ fullWidth: true }}
            inputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <i className="fas fa-users" />
                </InputAdornment>
              )
            }}
          />
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles()(InputDemo);
