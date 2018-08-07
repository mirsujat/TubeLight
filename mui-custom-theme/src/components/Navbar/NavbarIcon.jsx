import React, { Component } from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Search from "@material-ui/icons/Search";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import Settings from "@material-ui/icons/SettingsApplications";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";
// core components
import GridContainer from "../Grid/GridContainer.jsx";
import GridItem from "../Grid/GridItem.jsx";
import Header from "../Header/Header.jsx";
import Dropdown from "../Dropdown/Dropdown.jsx";
import Button from "../Button/button.jsx";

import navbarStyle from "./navbarStyle.jsx";

class NavbarIcon extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div className={classes.title}>
                <h3>Menu with Icons</h3>
              </div>
              <Header
                brand="Icons"
                color="info"
                rightLinks={
                  <List className={classes.list}>
                    <ListItem className={classes.listItem}>
                      <Button color="transparent" className={classes.navLink}>
                        <Email className={classes.icons} />
                      </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                      <Button color="transparent" className={classes.navLink}>
                        <Face className={classes.icons} />
                      </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                      <Dropdown
                        left
                        hoverColor="info"
                        dropdownHeader="Dropdown Header"
                        buttonIcon={Settings}
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
        </div>
      </div>
    );
  }
}

export default withStyles(navbarStyle)(NavbarIcon);
