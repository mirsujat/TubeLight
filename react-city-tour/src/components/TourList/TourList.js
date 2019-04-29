import React, { Component } from "react";
import Tour from "../Tour/Tour";
import "./TourList.scss";
class TourList extends Component {
  state = {};
  render() {
    return (
      <section>
        <Tour />
      </section>
    );
  }
}

export default TourList;
