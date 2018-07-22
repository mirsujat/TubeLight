import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "mdbreact";

const SideNav = props => {
  return (
    <ListGroup>
      <ListGroupItem active>
        <span className="side-nav-icon active">
          <i class="fa fa-home" aria-hidden="true" />
        </span>Home
      </ListGroupItem>
      <ListGroupItem>
        <span className="side-nav-icon">
          <i class="fa fa-home" aria-hidden="true" />
        </span>Trending
      </ListGroupItem>
      <ListGroupItem>
        <span className="side-nav-icon">
          <i class="fa fa-home" aria-hidden="true" />
        </span>Subscriptions
      </ListGroupItem>
      <ListGroupItem>
        <span className="side-nav-icon">
          <i class="fa fa-home" aria-hidden="true" />
        </span>Porta ac consectetur ac
      </ListGroupItem>
      <ListGroupItem>
        <span className="side-nav-icon">
          <i class="fa fa-home" aria-hidden="true" />
        </span>Vestibulum at eros
      </ListGroupItem>
    </ListGroup>
  );
};

export default SideNav;
