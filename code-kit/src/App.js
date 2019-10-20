import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home/Home";
import Registration from "./pages/Registration/Registration";
import Blog from "./pages/Blog/Blog";
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
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/blog" component={Blog}></Route>
            <Route exact path="/registration" component={Registration}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
