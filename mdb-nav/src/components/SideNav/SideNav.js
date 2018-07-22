import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "mdbreact";

const SideNav = props => {
  return (
    <ListGroup>
      <ListGroupItem active>Home</ListGroupItem>
      <ListGroupItem>Trending</ListGroupItem>
      <ListGroupItem>Subscriptions</ListGroupItem>
      <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
      <ListGroupItem>Vestibulum at eros</ListGroupItem>
    </ListGroup>
  );
};

export default SideNav;
