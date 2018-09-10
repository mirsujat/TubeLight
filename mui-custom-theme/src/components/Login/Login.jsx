import React, { Fragment } from "react";

// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";

// @material-ui/icons
import People from "@material-ui/icons/People";
import Lock from "@material-ui/icons/Lock";
import Email from "@material-ui/icons/Email";
import VisibilityOutlined from "@material-ui/icons/VisibilityOutlined";
// core components
import GridContainer from "../Grid/GridContainer.jsx";
import GridItem from "../Grid/GridItem.jsx";
import Card from "../Card/Card.jsx";
import CardBody from "../Card/CardBody/CardBody.jsx";
import Input from "../Input/Input.jsx";
import Button from "../Button/Button.jsx";
import loginStyle from "./loginStyle.jsx";
import { card } from "../../assets/jss/common-rules.jsx";

const styles = {
  card,
  ...loginStyle
};

const Login = props => {
  const { classes } = props;
  return (
    <Fragment>
      <GridContainer>
        <GridItem xs={12} sm={6} md={4} />
        <GridItem xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardBody>
              <h4 className={classes.header}>Login</h4>
              <div className={classes.smartInputGroup}>
                <div className={classes.labelAppend}>
                  {" "}
                  <People />
                </div>
                <div className={classes.input}>
                  <Input
                    labelText="Email Address"
                    id="email"
                    formControlProps={{ fullWidth: true }}
                  />
                </div>
              </div>
              <div className={classes.smartInputGroup}>
                <div className={classes.labelAppend}>
                  {" "}
                  <Email />
                </div>
                <div className={classes.input}>
                  <Input
                    labelText="Email Address"
                    id="email"
                    formControlProps={{ fullWidth: true }}
                  />
                </div>
              </div>
              <div className={classes.smartInputGroup}>
                <div className={classes.labelAppend}>
                  {" "}
                  <Lock />
                </div>
                <div className={classes.input}>
                  <Input
                    labelText="Password"
                    id="password"
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
            </CardBody>
            <div className={classes.submitButton}>
              <Button color="primary">Login</Button>
            </div>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4} />
      </GridContainer>
    </Fragment>
  );
};

export default withStyles(styles)(Login);
