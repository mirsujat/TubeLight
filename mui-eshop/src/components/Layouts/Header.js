import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import CreateDialog from "../Exercises/Dialogs/Create";

const header = ({ muscles, onExerciseCreate }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit" style={{ flex: 1 }}>
          Exercises Database
        </Typography>

        <CreateDialog muscles={muscles} onCreate={onExerciseCreate} />
      </Toolbar>
    </AppBar>
  );
};

export default header;
