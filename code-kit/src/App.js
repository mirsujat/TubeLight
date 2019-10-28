import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import HomePage from "./pages/Home/HomePage";
import BlogPage from "./pages/Blog/BlogPage";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="content">
          <Switch>
            <Route exact patch="/" component={HomePage}></Route>
            <Route patch="/blog" component={BlogPage}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
