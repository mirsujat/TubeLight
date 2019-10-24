import React, { Component } from "react";
import Search from "../../components/search/Search";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <h4 className="title">Search Your IP.</h4>
        <Search></Search>
      </div>
    );
  }
}

export default HomePage;