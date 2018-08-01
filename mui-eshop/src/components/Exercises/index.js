import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import { Edit, Delete } from "@material-ui/icons";

import Form from "./Form";

const exercises = ({
  muscles,
  exercises,
  exercise,
  category,
  onSelect,
  exercise: {
    id,
    title = "Welcome!",
    description = "Please Select an Exercise From The List on The Left."
  },
  onSelectEdit,
  onDelete,
  onEdit,
  editMode
}) => {
  return (
    <Grid container color="default" light>
      <Grid item xs={12} sm={6}>
        <Paper style={styles.Paper}>
          {exercises.map(
            ([group, exercises]) =>
              !category || category === group ? (
                <Fragment key={group}>
                  <Typography
                    variant="headline"
                    style={{ textTransform: "capitalize" }}
                  >
                    {group}
                  </Typography>
                  <List component="ul">
                    {exercises.map(({ id, title }) => (
                      <ListItem key={id} button onClick={() => onSelect(id)}>
                        <ListItemText primary={title} />
                        <ListItemSecondaryAction>
                          <IconButton
                            aria-label="Edit"
                            onClick={() => onSelectEdit(id)}
                          >
                            <Edit color="primary" light />
                          </IconButton>
                          <IconButton
                            aria-label="Delete"
                            onClick={() => onDelete(id)}
                          >
                            <Delete color="error" />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    ))}
                  </List>
                </Fragment>
              ) : null
          )}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper style={styles.Paper}>
          <Typography variant="display1" gutterBottom>
            {title}
          </Typography>

          {editMode ? (
            <Form
              key={id}
              muscles={muscles}
              onSubmit={onEdit}
              exercise={exercise}
            />
          ) : (
            <Typography variant="body1">{description}</Typography>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

const styles = {
  Paper: {
    padding: 20,
    marginTop: 5,
    height: 400,
    overflowY: "auto"
  }
};

export default withStyles(styles)(exercises);
