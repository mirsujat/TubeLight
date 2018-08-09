import React, { Component } from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons

import Search from "@material-ui/icons/Search";

// core components
import GridContainer from "../Grid/GridContainer.jsx";
import GridItem from "../Grid/GridItem.jsx";
import Header from "../Header/Header.jsx";
import Button from "../Button/button.jsx";
import Input from "../Input/Input.jsx";
import navbarStyle from "./navbarStyle.jsx";

class NavbarSearch extends Component {
  render() {
    const { classes } = this.props;
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <div className={classes.title}>
            <h3>Menu with Search</h3>
          </div>
          <Header
            brand="Brand"
            color="danger"
            leftLinks={
              <List className={classes.list}>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    Home
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    Services
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    Support
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    Contact
                  </Button>
                </ListItem>
              </List>
            }
            rightLinks={
              <div>
                <Input
                  white
                  inputRootCustomClasses={classes.inputRootCustomClasses}
                  formControlProps={{
                    className: classes.formControl
                  }}
                  inputProps={{
                    placeholder: "Search",
                    inputProps: {
                      "aria-label": "Search",
                      className: classes.searchInput
                    }
                  }}
                />
                <Button justIcon round color="white">
                  <Search className={classes.searchIcon} />
                </Button>
              </div>
            }
          />
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(navbarStyle)(NavbarSearch);
