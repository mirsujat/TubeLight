import React, { Fragment } from "react";

//Material-ui core component
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import Card from "../../components/Card/Card.jsx";
import CardBody from "../../components/Card/CardBody/CardBody.jsx";
import CardFooter from "../../components/Card/CardFooter/CardFooter.jsx";
import Button from "../../components/Button/button.jsx";
import InputDefault from "../../components/InputDefault/InputDefault.jsx";
import TextArea from "../../components/InputDefault/TextArea.jsx";
import inputDefaultStyle from "../../components/InputDefault/inputDefaultStyle.jsx";
import contactStyle from "./contactStyle.jsx";

const styles = {
  ...inputDefaultStyle,
  ...contactStyle
};

const contact = props => {
  const { classes } = props;
  return (
    <Fragment>
      <section>
        <GridContainer>
          <GridItem xs={12} sm={12} md={3} />
          <GridItem xs={12} sm={12} md={6}>
            <Card className={classes.card}>
              <CardBody>
                <h2 className={classes.contactTitle}>Naam Contact Form</h2>
                <h5 className={classes.contactSubtitle}>
                  Contact us for custom quote
                </h5>
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
                <InputDefault
                  id="phone"
                  inputRootCustomClasses={classes.inputRootCustomClasses}
                  formControlProps={{ className: classes.formControl }}
                  inputProps={{
                    placeholder: "Phone Number",
                    type: "phone",
                    disableUnderline: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <span className={classes.inputLable}>Phone: </span>
                      </InputAdornment>
                    )
                  }}
                />
                <InputDefault
                  id="webaddress"
                  inputRootCustomClasses={classes.inputRootCustomClasses}
                  formControlProps={{ className: classes.formControl }}
                  inputProps={{
                    placeholder: "Your Web Site",
                    type: "text",
                    disableUnderline: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <span className={classes.inputLable}>Web Site: </span>
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
                <div className={classes.submitButton}>
                  <Button color="success">Submit</Button>
                </div>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3} />
        </GridContainer>
      </section>
    </Fragment>
  );
};

export default withStyles(styles)(contact);
