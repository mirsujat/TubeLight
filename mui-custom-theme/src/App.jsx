import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

//Views
import Components from "./views/Components/Components.jsx";
import Blog from "./views/Blog/BlogItmes/BlogItems.jsx";
import BlogItem from "./views/Blog/BlogItem/BLogItem.jsx";
import Contact from "./views/Contact/Contact.jsx";
import Portfolio from "./views/Portfolio/Portfolio.jsx";

//Latout Page
import Layout from "./HOC/Layout.jsx";

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route exact path="/" component={Components} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/blog/item" component={BlogItem} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
    );
    return (
      <div>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

export default App;
