import React, { Component } from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import InfoOutlined from "@material-ui/icons/InfoOutlined";
import Check from "@material-ui/icons/Check";
import Warning from "@material-ui/icons/Warning";
// core components
import Snackbar from "../Snackbar/Snackbar.jsx";
import Clearfix from "../Clearfix/Clearfix.jsx";
import notificationStyle from "./notificationStyle.jsx";

class Notifications extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section} id="notifications">
        <div className={classes.container}>
          <div className={classes.title}>
            <h3>Notifications</h3>
          </div>
        </div>
        <Snackbar
          message={
            <span>
              <b>INFO ALERT:</b> You've got some friends nearby, stop looking at
              your phone and find them...
            </span>
          }
          close
          color="info"
          icon={InfoOutlined}
        />
        <Snackbar
          message={
            <span>
              <b>SUCCESS ALERT:</b> You've got some friends nearby, stop looking
              at your phone and find them...
            </span>
          }
          close
          color="success"
          icon={Check}
        />
        <Snackbar
          message={
            <span>
              <b>WARNING ALERT:</b> You've got some friends nearby, stop looking
              at your phone and find them...
            </span>
          }
          close
          color="warning"
          icon={Warning}
        />
        <Snackbar
          message={
            <span>
              <b>DANGER ALERT:</b> You've got some friends nearby, stop looking
              at your phone and find them...
            </span>
          }
          close
          color="danger"
          icon={InfoOutlined}
        />
        <Clearfix />
      </div>
    );
  }
}

export default withStyles(notificationStyle)(Notifications);
