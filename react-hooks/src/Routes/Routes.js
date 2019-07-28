import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Pages/Home";
import Form from "../Pages/Form";
import Articles from "../Pages/Articles";
import Article from "../Pages/Article";

const Routes = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/form" component={Form} />
      <Route path="/api/articles" component={Articles} />
      <Route path="/api/:id" component={Article} />
    </Switch>
  </Router>
);

export default Routes;
