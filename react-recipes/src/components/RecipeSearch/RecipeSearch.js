import React, { Component, Fragment } from "react";

class RecipeSearch extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5 text-center">
              <h1 className="text-slanted text-capitalize">
                search for recipe with{" "}
                <strong className="text-dange">Food2Fork</strong>
              </h1>
              <form className="mt-4">
                <label htmlFor="search" className="text-capitalize">
                  type recipes seperated by comma
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    name="search"
                    placeholder="chicken, onions, carrots"
                    className="form-control"
                  />
                  <div className="input-group-append">
                    <button
                      type="button"
                      className="input-group-text bg-primary text-white"
                    >
                      <i className="fas fa-search" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default RecipeSearch;
