import React, { Fragment, Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";

import Form from "./Form";

class CreateDialog extends Component {
  state = {
    open: false
  };

  toggleHandler = () => {
    this.setState({ open: !this.state.open });
  };

  formSubmitHandler = exercise => {
    this.toggleHandler();

    this.props.onCreate(exercise);
  };

  render() {
    const { open } = this.state,
      { muscles } = this.props;

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
          fullWidth
          maxWidth="xs"
        >
          <DialogTitle id="form-dialog-title">
            Create a New Exercise
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please Fillout The Form Bellow.
            </DialogContentText>
            <Form muscles={muscles} onSubmit={this.formSubmitHandler} />
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

export default CreateDialog;
