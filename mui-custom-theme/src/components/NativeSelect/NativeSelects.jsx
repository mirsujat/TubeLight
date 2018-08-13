import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";

import NativeSelectsStyles from "./NativeSelectsStyle.jsx";

class NativeSelects extends React.Component {
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
        <InputLabel className={classes.inputLabel} shrink={false} htmlFor="age">
          Age
        </InputLabel>

        <NativeSelect
          value={this.state.age}
          onChange={this.handleChange("age")}
          className={classes.select}
          input={
            <Input
              className={classes.input}
              disableUnderline={true}
              name="age"
              id="age"
            />
          }
        >
          <option value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl>
    );
  }
}

export default withStyles(NativeSelectsStyles)(NativeSelects);
