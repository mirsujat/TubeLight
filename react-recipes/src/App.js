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
    details_id: 35382,
    pageIndex: 1
  };

  async getRecipes() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      this.setState({ recipes: jsonData.recipes });
    } catch (error) {
      console.log(error);
    }
  }
  // componentDidMount() {
  //   this.getRecipes();
  // }
  displayPage = index => {
    switch (index) {
      case 1:
        return (
          <RecipeList
            recipes={this.state.recipes}
            handleDetails={this.handleDetails}
          />
        );
        break;
      case 0:
        return (
          <RecipeDetails
            id={this.state.details_id}
            handleIndex={this.handleIndex}
          />
        );

      default:
        break;
    }
  };

  handleIndex = index => {
    this.setState({
      pageIndex: index
    });
  };
  handleDetails = (index, id) => {
    this.setState({
      pageIndex: index,
      details_id: id
    });
  };

  render() {
    return <Fragment>{this.displayPage(this.state.pageIndex)}</Fragment>;
  }
}

export default App;
