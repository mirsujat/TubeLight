import React, { Component } from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons

import Favorite from "@material-ui/icons/Favorite";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Email from "@material-ui/icons/Email";

// core components
import GridContainer from "../Grid/GridContainer.jsx";
import GridItem from "../Grid/GridItem.jsx";
import Header from "../Header/Header.jsx";
import Button from "../Button/button.jsx";
import Dropdown from "../Dropdown/Dropdown.jsx";
import navbarStyle from "./navbarStyle.jsx";

import profileImage from "../../assets/img/people/profile-pic.jpg";

class NavbarNotification extends Component {
  render() {
    const { classes } = this.props;
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <div className={classes.title}>
            <h3>Menu with Notification</h3>
          </div>
          <Header
            brand="Navbar with notifications"
            color="white"
            rightLinks={
              <List className={classes.list}>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    <ShoppingCart className={classes.icons} />
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    <Favorite className={classes.icons} />
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    justIcon
                    round
                    href="#pablo"
                    className={classes.notificationNavLink}
                    onClick={e => e.preventDefault()}
                  >
                    <Email className={classes.icons} />
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Dropdown
                    left
                    caret={false}
                    hoverColor="black"
                    buttonText={
                      <img
                        src={profileImage}
                        className={classes.img}
                        alt="profile"
                      />
                    }
                    buttonProps={{
                      className:
                        classes.navLink + " " + classes.imageDropdownButton,
                      color: "transparent"
                    }}
                    dropdownList={["Me", "Settings", "Sign out"]}
                  />
                </ListItem>
              </List>
            }
          />
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(navbarStyle)(NavbarNotification);
