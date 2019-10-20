import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/Home/HomePage";
import BlogPage from "./pages/Blog/BlogPage";
import Header from "./components/header/Header";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="content">
          <h1>REACT HOOKS</h1>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/blog" component={BlogPage}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
