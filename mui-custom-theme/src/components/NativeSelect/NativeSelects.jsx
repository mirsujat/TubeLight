import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

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
      <FormControl>
        <InputLabel htmlFor="age-native-simple">Age</InputLabel>
        <InputLabel htmlFor="age-native-helper">Age</InputLabel>
        <NativeSelect
          value={this.state.age}
          onChange={this.handleChange("age")}
          input={<Input name="age" id="age-native-helper" />}
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

export default NativeSelects;
