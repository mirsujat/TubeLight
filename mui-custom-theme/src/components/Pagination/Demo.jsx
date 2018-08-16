import React, { Component } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "../Grid/GridContainer.jsx";
import GridItem from "../Grid/GridItem.jsx";
import Pagination from "./Pagination.jsx";
import demoStyle from "./demoStyle.jsx";

class PaginationDemo extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.title}>
          <h3>
            <small>Pagination for Lazy Loading</small>
          </h3>
        </div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12}>
            <div className={classes.title}>
              <h3>Pagination</h3>
            </div>
            <Pagination
              pages={[
                { text: 1 },
                { text: "..." },
                { text: 5 },
                { text: 6 },
                { active: true, text: 7 },
                { text: 8 },
                { text: 9 },
                { text: "..." },
                { text: 12 }
              ]}
            />
            <Pagination
              pages={[
                { text: "PREV" },
                { text: 1 },
                { text: 2 },
                { active: true, text: 3 },
                { text: 4 },
                { text: 5 },
                { text: "NEXT" }
              ]}
              color="default"
            />
            <Pagination
              pages={[
                { text: 1 },
                { text: "..." },
                { text: 5 },
                { text: 6 },
                { active: true, text: 7 },
                { text: 8 },
                { text: 9 },
                { text: "..." },
                { text: 12 }
              ]}
              color="danger"
            />
            <Pagination
              pages={[
                { text: "PREV" },
                { text: 1 },
                { text: 2 },
                { active: true, text: 3 },
                { text: 4 },
                { text: 5 },
                { text: "NEXT" }
              ]}
              color="warning"
            />
            <Pagination
              pages={[
                { text: "PREV" },
                { text: 1 },
                { text: 2 },
                { active: true, text: 3 },
                { text: 4 },
                { text: 5 },
                { text: "NEXT" }
              ]}
              color="success"
            />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(demoStyle)(PaginationDemo);
