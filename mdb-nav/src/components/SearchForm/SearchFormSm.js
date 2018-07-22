import React, { Component } from "react";
import arrowleft from "./arrow-left-50.png";

class SearchFormSm extends Component {
  render() {
    return (
      <div className="search-nav">
        <div className="row">
          <div className="col-2 arrow-left">
            <img src={arrowleft} width="35px" height="28px" />
          </div>
          <div className="col-10 search-sm">
            <div className="active-cyan-2">
              <input
                className="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchFormSm;
