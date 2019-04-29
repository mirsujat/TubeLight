import React, { Component } from "react";
import Tour from "../Tour/Tour";
import "./TourList.scss";
import { tourData } from "./tourData";

class TourList extends Component {
  state = {
    tours: tourData
  };
  render() {
    console.log(this.state.tours);
    return (
      <section className="tourList">
        <Tour />
      </section>
    );
  }
}

export default TourList;
