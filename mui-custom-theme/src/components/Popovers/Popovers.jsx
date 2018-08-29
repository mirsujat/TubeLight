import React, { Component } from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Popover from "@material-ui/core/Popover";

// core components
import GridContainer from "../Grid/GridContainer.jsx";
import GridItem from "../Grid/GridItem.jsx";
import Button from "../Button/button.jsx";
import popoversStyle from "./popoversStyle.jsx";

class Popovers extends Component {
  anchorElLeft = null;
  anchorElTop = null;
  anchorElBottom = null;
  anchorElRight = null;
  state = {
    openLeft: false,
    openTop: false,
    openBottom: false,
    openRight: false
  };

  handleClosePopover = state => {
    this.setState({
      [state]: false
    });
  };
  handleClickButton = state => {
    this.setState({
      [state]: true
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.title}>
                <h3>Popovers</h3>
              </div>
              <Button
                buttonRef={node => {
                  this.anchorElLeft = node;
                }}
                onClick={() => this.handleClickButton("openLeft")}
              >
                On left
              </Button>
              <Popover
                classes={{
                  paper: classes.popover
                }}
                open={this.state.openLeft}
                anchorEl={this.anchorElLeft}
                anchorReference={"anchorEl"}
                onClose={() => this.handleClosePopover("openLeft")}
                anchorOrigin={{
                  vertical: "center",
                  horizontal: "left"
                }}
                transformOrigin={{
                  vertical: "center",
                  horizontal: "right"
                }}
              >
                <h3 className={classes.popoverHeader}>Popover on left</h3>
                <div className={classes.popoverBody}>
                  Here will be some very useful information about his popover.
                  Here will be some very useful information about his popover.
                </div>
              </Popover>
              <Button
                buttonRef={node => {
                  this.anchorElTop = node;
                }}
                onClick={() => this.handleClickButton("openTop")}
              >
                On top
              </Button>
              <Popover
                classes={{
                  paper: classes.popover
                }}
                open={this.state.openTop}
                anchorEl={this.anchorElTop}
                anchorReference={"anchorEl"}
                onClose={() => this.handleClosePopover("openTop")}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center"
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "center"
                }}
              >
                <h3 className={classes.popoverHeader}>Popover on top</h3>
                <div className={classes.popoverBody}>
                  Here will be some very useful information about his popover.
                </div>
              </Popover>
              <Button
                buttonRef={node => {
                  this.anchorElBottom = node;
                }}
                onClick={() => this.handleClickButton("openBottom")}
              >
                On bottom
              </Button>
              <Popover
                classes={{
                  paper: classes.popover
                }}
                open={this.state.openBottom}
                anchorEl={this.anchorElBottom}
                anchorReference={"anchorEl"}
                onClose={() => this.handleClosePopover("openBottom")}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center"
                }}
              >
                <h3 className={classes.popoverHeader}>Popover on bottom</h3>
                <div className={classes.popoverBody}>
                  Here will be some very useful information about his popover.
                </div>
              </Popover>
              <Button
                buttonRef={node => {
                  this.anchorElRight = node;
                }}
                onClick={() => this.handleClickButton("openRight")}
              >
                On right
              </Button>
              <Popover
                classes={{
                  paper: classes.popover
                }}
                open={this.state.openRight}
                anchorEl={this.anchorElRight}
                anchorReference={"anchorEl"}
                onClose={() => this.handleClosePopover("openRight")}
                anchorOrigin={{
                  vertical: "center",
                  horizontal: "right"
                }}
                transformOrigin={{
                  vertical: "center",
                  horizontal: "left"
                }}
              >
                <h3 className={classes.popoverHeader}>Popover on right</h3>
                <div className={classes.popoverBody}>
                  Here will be some very useful information about his popover.
                </div>
              </Popover>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(popoversStyle)(Popovers);
