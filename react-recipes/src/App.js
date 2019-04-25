import React, { Fragment } from "react";
import { recipes } from "./tempList";
import RecipeList from "./components/RecipeList/RecipeList";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Fragment>
      <RecipeList />
      <RecipeDetails />
    </Fragment>
  );
}

export default App;
