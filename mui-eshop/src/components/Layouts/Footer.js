import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import withWidth from "@material-ui/core/withWidth";

const footer = ({ muscles, category, onSelect, width }) => {
  const index = category
    ? muscles.findIndex(group => group === category) + 1
    : 0;

  const onIndexSelected = (o, index) => {
    onSelect(index === 0 ? "" : muscles[index - 1]);
  };

  return (
    <Paper>
      <Tabs
        value={index}
        onChange={onIndexSelected}
        indicatorColor="primary"
        textColor="primary"
        centered={width !== "xs"}
        scrollable={width === "xs"}
      >
        <Tab label="All" />
        {muscles.map(group => <Tab key={group} label={group} />)}
      </Tabs>
    </Paper>
  );
};

export default withWidth()(footer);
