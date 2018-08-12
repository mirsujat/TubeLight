import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";

// @material-ui/icons
import Clear from "@material-ui/icons/Clear";
import Check from "@material-ui/icons/Check";
// core components
import inputDefaultStyle from "./inputDefaultStyle.jsx";

function inputDefault({ ...props }) {
  const {
    classes,
    formControlProps,
    labelText,
    id,
    inputProps,
    error,
    white,
    inputRootCustomClasses,
    success
  } = props;

  const marginTop = classNames({
    [classes.marginTop]: labelText === undefined,
    [inputRootCustomClasses]: inputRootCustomClasses !== undefined
  });
  const textAreaClasses = classNames({
    [classes.textArea]: true,
    [classes.whiteInput]: white
  });
  const formControlClasses = classNames({
    [classes.formControlTextArea]: true,
    [classes.formControlLabel]: labelText !== undefined,
    [formControlProps.className]: formControlProps.className !== undefined
  });
  return (
    <FormControl {...formControlProps} className={formControlClasses}>
      <Input
        classes={{
          input: textAreaClasses,
          root: marginTop,
          disabled: classes.disabled
        }}
        id={id}
        {...inputProps}
      />
      {error ? (
        <Clear className={classes.feedback} />
      ) : success ? (
        <Check className={classes.feedback} />
      ) : null}
    </FormControl>
  );
}

inputDefault.propTypes = {
  classes: PropTypes.object.isRequired,
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  inputRootCustomClasses: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
  white: PropTypes.bool
};

export default withStyles(inputDefaultStyle)(inputDefault);
