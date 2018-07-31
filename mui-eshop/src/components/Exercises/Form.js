import React, { Component, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

class Form extends Component {
  state = this.getInitialState();

  getInitialState() {
    const { exercise } = this.props;

    return exercise
      ? exercise
      : {
          title: "",
          description: "",
          muscles: ""
        };
  }

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      [name]: value
    });
  };

  submitHandle = () => {
    //TODO: Validations

    const { exercise } = this.state;

    this.props.onSubmit({
      ...exercise,
      id: exercise.title.toLocaleLowerCase().replace(/ /g, "-")
    });
    this.setState({
      open: false,
      exercise: {
        title: "",
        description: "",
        muscles: ""
      }
    });
  };

  render() {
    const { title, description, muscles } = this.state,
      { classes, muscles: categories } = this.props;

    return (
      <form className={classes.formControl}>
        <TextField
          label="Title"
          value={title}
          onChange={this.handleChange("title")}
          margin="normal"
          className={classes.formControl}
        />
        <br />
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="muscles">Muscles</InputLabel>
          <Select value={muscles} onChange={this.handleChange("muscles")}>
            {categories.map(category => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <br />
        <TextField
          multiline
          rows="4"
          label="Description"
          value={description}
          onChange={this.handleChange("description")}
          margin="normal"
          className={classes.formControl}
        />
        <br />
        <Button color="primary" onClick={this.submitHandle}>
          Create
        </Button>
      </form>
    );
  }
}

const styles = theme => ({
  formControl: {
    width: 300
  }
});
export default withStyles(styles)(Form);
