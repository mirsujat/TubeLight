import React, { Component } from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons

import Shop from "@material-ui/icons/Shop";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";

// core components
import GridContainer from "../Grid/GridContainer.jsx";
import GridItem from "../Grid/GridItem.jsx";
import Header from "../Header/Header.jsx";
import Button from "../Button/Button.jsx";
import Dropdown from "../Dropdown/Dropdown.jsx";
import navbarStyle from "./navbarStyle.jsx";

class NavbarIconText extends Component {
  render() {
    const { classes } = this.props;
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <div className={classes.title}>
            <h3>Menu with Icon Text</h3>
          </div>
          <Header
            brand="Primary Color"
            color="primary"
            rightLinks={
              <List className={classes.list}>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink + " " + classes.navLinkActive}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    <Explore className={classes.icons} /> Discover
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    <Shop className={classes.icons} /> Shop
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Dropdown
                    left
                    hoverColor="info"
                    dropdownHeader="Dropdown Header"
                    buttonText="Profile"
                    buttonIcon={AccountCircle}
                    buttonProps={{
                      className: classes.navLink,
                      color: "transparent"
                    }}
                    dropdownList={[
                      "Action",
                      "Another action",
                      "Something else here",
                      { divider: true },
                      "Separated link",
                      { divider: true },
                      "One more separated link"
                    ]}
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

export default withStyles(navbarStyle)(NavbarIconText);
