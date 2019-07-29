import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Pages/Home";
import Form from "../Pages/Form";
import Articles from "../Pages/Articles";
import Article from "../Pages/Article";
import FormValidation from "../Pages/FormValidation";
import SimpleForm from "../Pages/SimpleForm";

const Routes = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/simple-form" component={SimpleForm} />
      <Route path="/form" component={Form} />
      <Route path="/form-validation" component={FormValidation} />
      <Route path="/api/articles" component={Articles} />
      <Route path="/api/:id" component={Article} />
    </Switch>
  </Router>
);

export default Routes;
