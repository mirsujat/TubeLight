import React, { Fragment, Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";

class CreateDialog extends Component {
  state = {
    open: false,
    exercise: {
      title: "",
      description: "",
      muscles: ""
    }
  };

  toggleHandler = () => {
    this.setState({ open: !this.state.open });
  };

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      exercise: {
        ...this.state.exercise,
        [name]: value
      }
    });
  };

  submitHandle = () => {
    //TODO: Validations

    const { exercise } = this.state;

    this.props.onCreate({
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
    const {
        open,
        exercise: { title, description, muscles }
      } = this.state,
      { classes, muscles: categories } = this.props;

    return (
      <Fragment>
        <Button
          variant="fab"
          aria-label="Add"
          mini
          onClick={this.toggleHandler}
        >
          <AddIcon />
        </Button>
        <Dialog
          open={open}
          onClose={this.toggleHandler}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Create a New Exercise
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please Fillout The Form Bellow.
            </DialogContentText>
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
            </form>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.submitHandle}>
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

const styles = theme => ({
  formControl: {
    width: 500
  }
});

export default withStyles(styles)(CreateDialog);
