import React, { Component, Fragment } from "react";
import Recipe from "../Recipe/Recipe";
import RecipeSearch from "../RecipeSearch/RecipeSearch";

class RecipeList extends Component {
  state = {};
  render() {
    const { recipes, handleDetails } = this.props;
    return (
      <Fragment>
        <RecipeSearch />
        <div className="container my-5">
          {/* title */}
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
              <h1 className="text-slanted">recipe list</h1>
            </div>
          </div>
          {/* end of title */}
          <div className="row">
            {recipes.map(recipe => {
              return (
                <Recipe
                  key={recipe.recipe_id}
                  recipe={recipe}
                  handleDetails={handleDetails}
                />
              );
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default RecipeList;
