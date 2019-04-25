import React, { Component, Fragment } from "react";
import Recipe from "../Recipe/Recipe";
import RecipeSearch from "../RecipeSearch/RecipeSearch";

class RecipeList extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <h1>Hello From Recipe List</h1>
        <RecipeSearch />
        <Recipe />
      </Fragment>
    );
  }
}

export default RecipeList;
