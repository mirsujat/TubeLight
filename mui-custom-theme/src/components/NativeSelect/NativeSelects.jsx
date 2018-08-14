import React, { Component } from "react";

// nodejs library to set properties for components
import PropTypes from "prop-types";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import NativeSelectsStyles from "./NativeSelectsStyle.jsx";

class NativeSelects extends Component {
  state = {
    age: "",
    name: "hai"
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <FormControl className={classes.formControl}>
        <span className={classes.label}>Age:</span>

        <NativeSelect
          value={this.state.age}
          onChange={this.handleChange("age")}
          disableUnderline={true}
          inputProps={{ name: "age", id: "age" }}
          classes={{ select: classes.select }}
        >
          <option className={classes.option} value="">
            Select Age..
          </option>
          <option className={classes.option} value={10}>
            Ten
          </option>
          <option className={classes.option} value={20}>
            Twenty
          </option>
          <option className={classes.option} value={30}>
            Thirty
          </option>
        </NativeSelect>
      </FormControl>
    );
  }
}

export default withStyles(NativeSelectsStyles)(NativeSelects);
