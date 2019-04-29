import React, { Component } from "react";
import Tour from "../Tour/Tour";
import "./TourList.scss";

class TourList extends Component {
  state = {
    tours: []
  };
  render() {
    return (
      <section className="tourList">
        <Tour />
      </section>
    );
  }
}

export default TourList;
