import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CreateDialog from "../Exercises/Create";
import { withStyles } from "@material-ui/core/styles";

const header = ({ classes, muscles, onExerciseCreate }) => {
  return (
    <AppBar position="static" color="primary" light>
      <Toolbar>
        <Typography variant="title" className={classes.flex}>
          Exercises Database
        </Typography>

        <CreateDialog muscles={muscles} onCreate={onExerciseCreate} />
      </Toolbar>
    </AppBar>
  );
};

const styles = {
  flex: {
    flex: 1,
    color: "#fff"
  }
};

export default withStyles(styles)(header);
