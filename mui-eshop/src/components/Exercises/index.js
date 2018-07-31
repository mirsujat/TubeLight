import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";

const exercises = ({ exercises, category }) => {
  return (
    <Grid container>
      <Grid item sm>
        <Paper style={styles.Paper}>
          {exercises.map(
            ([group, exercises]) =>
              !category || category === group ? (
                <Fragment>
                  <Typography
                    variant="headline"
                    style={{ textTransform: "capitalize" }}
                  >
                    {group}
                  </Typography>
                  <List component="ul">
                    {exercises.map(({ title }) => (
                      <ListItem button>
                        <ListItemText primary={title} />
                      </ListItem>
                    ))}
                  </List>
                </Fragment>
              ) : null
          )}
        </Paper>
      </Grid>
      <Grid item sm>
        <Paper style={styles.Paper}>
          <Typography variant="display1">Welcom!</Typography>

          <Typography variant="body1" style={{ marginTop: 20 }}>
            Please Select an Exercise From The List on The Left.
          </Typography>
        </Paper>;
      </Grid>
    </Grid>
  );
};

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 400,
    overflowY: "auto"
  }
};

export default withStyles()(exercises);
