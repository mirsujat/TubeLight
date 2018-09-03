import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import AccountCircle from "@material-ui/icons/AccountCircle";

// core components
import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import Header from "../../components/Header/Header.jsx";
import Brand from "./Brand/Brand.jsx";
import Button from "../../components/Button/button.jsx";
import Dropdown from "../../components/Dropdown/Dropdown.jsx";
import navbarStyle from "../../components/Navbar/navbarStyle.jsx";

class Topnav extends Component {
  render() {
    const { classes } = this.props;
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Header
            fixed
            brand={<Brand />}
            color="primary"
            rightLinks={
              <List className={classes.list}>
                <ListItem className={classes.listItem}>
                  <Link to={"/"} className={classes.link}>
                    <Button className={classes.navLink} color="transparent">
                      Components
                    </Button>
                  </Link>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Link to={"/blog"} className={classes.link}>
                    <Button className={classes.navLink} color="transparent">
                      Blog
                    </Button>
                  </Link>
                </ListItem>

                <ListItem className={classes.listItem}>
                  <Link to={"/portfolio"} className={classes.link}>
                    <Button className={classes.navLink} color="transparent">
                      Portfolio
                    </Button>
                  </Link>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Link to={"/contact"} className={classes.link}>
                    <Button className={classes.navLink} color="transparent">
                      Contact
                    </Button>
                  </Link>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Dropdown
                    left
                    hoverColor="primary"
                    buttonText="Profile"
                    buttonIcon={AccountCircle}
                    buttonProps={{
                      className: classes.navLink,
                      color: "transparent"
                    }}
                    dropdownList={["Profile", "History", "Settings", "Logout"]}
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

export default withStyles(navbarStyle)(Topnav);
