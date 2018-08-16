import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import badgeStyle from "./badgeStyle.jsx";

const badge = ({ ...props }) => {
  const { classes, className, color, round, children } = props;

  const badgeClasses = classNames({
    [classes.badge]: true,
    [classes[color]]: color,
    [classes.round]: round,
    [className]: className
  });
  return <span className={badgeClasses}>{children}</span>;
};

badge.defaultProps = {
  color: "gray"
};

badge.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "gold",
    "gray"
  ])
};

export default withStyles(badgeStyle)(badge);
