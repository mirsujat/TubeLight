import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";

// core components
import GridContainer from "../Grid/GridContainer.jsx";
import GridItem from "../Grid/GridItem.jsx";
import Button from "../Button/Button.jsx";
import tooltipsStyle from "./tooltipsStyle.jsx";

class Tooltips extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.title}>
                <h3>Tooltips</h3>
              </div>
              <Tooltip
                id="tooltip-left"
                title="Tooltip on left"
                placement="left"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button>On left</Button>
              </Tooltip>
              <Tooltip
                id="tooltip-top"
                title="Tooltip on top"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button>On top</Button>
              </Tooltip>
              <Tooltip
                id="tooltip-bottom"
                title="Tooltip on bottom"
                placement="bottom"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button>On bottom</Button>
              </Tooltip>
              <Tooltip
                id="tooltip-right"
                title="Tooltip on right"
                placement="right"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button>On right</Button>
              </Tooltip>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(tooltipsStyle)(Tooltips);
