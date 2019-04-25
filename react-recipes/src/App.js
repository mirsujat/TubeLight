import React, { Component, Fragment } from "react";
import { recipes } from "./tempList";
import RecipeList from "./components/RecipeList/RecipeList";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  state = {
    recipes: recipes,
    url:
      "https://www.food2fork.com/api/search?key=05c8438483f0c257ebd873b75a6a0f04",
    details_id: 35382
  };

  // async getRecipes() {
  //   try {
  //     const data = await fetch(this.state.url);
  //     const jsonData = await data.json();
  //     this.setState({ recipes: jsonData.recipes });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // componentDidMount() {
  //   this.getRecipes();
  // }
  render() {
    return (
      <Fragment>
        {/*  <RecipeList recipes={this.state.recipes} /> */}

        <RecipeDetails id={this.state.details_id} />
      </Fragment>
    );
  }
}

export default App;
