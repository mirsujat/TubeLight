import React, { Component } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";

// @material-ui/icons
import Lock from "@material-ui/icons/Lock";
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import VisibilityOutlined from "@material-ui/icons/VisibilityOutlined";
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// Custom Component
import GridContainer from "../Grid/GridContainer.jsx";
import GridItem from "../Grid/GridItem.jsx";
import Input from "./Input.jsx";
import demoStyle from "./demoStyle.jsx";

class InputDemo extends Component {
  render() {
    const { classes } = this.props;
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
        <GridItem xs={12} sm={4} md={4} lg={3}>
          <div className={classes.smartInputGroup}>
            <div className={classes.labelAppend}>
              {" "}
              <Lock />
            </div>
            <div className={classes.smartInput}>
              <Input
                labelText="With material Icons"
                id="font-awesome"
                formControlProps={{ fullWidth: true }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <VisibilityOutlined />
                    </InputAdornment>
                  )
                }}
              />
            </div>
          </div>
        </GridItem>
        <GridItem xs={12} sm={4} md={4} lg={3}>
          <div className={classes.smartInputGroup}>
            <div className={classes.labelAppend}>
              {" "}
              <Email />
            </div>
            <div className={classes.smartInput}>
              <Input
                labelText="With material Icons"
                id="font-awesome"
                formControlProps={{ fullWidth: true }}
              />
            </div>
          </div>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(demoStyle)(InputDemo);
