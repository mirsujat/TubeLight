import React, { Component, Fragment } from "react";

class Recipe extends Component {
  state = {};
  render() {
    const {
      image_url,
      title,
      source_url,
      publisher,
      recipe_id
    } = this.props.recipe;

    const { handleDetails } = this.props;
    return (
      <Fragment>
        <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
          <div className="card">
            <img
              src={image_url}
              alt="recipe"
              className="img-card-top"
              style={{
                height: "14rem"
              }}
            />
            <div className="card-body text-capitalize">
              <h6>{title}</h6>
              <h6 className="text-warning text-slanted">
                provider by {publisher}
              </h6>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-primary text-capitalize"
                type="button"
                onClick={() => handleDetails(0, recipe_id)}
              >
                details
              </button>
              <a
                href={source_url}
                className="btn btn-success mx-2 text-capitalize "
                target="_blank"
                rel="noopener noreferrer"
              >
                Recipe url
              </a>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Recipe;
