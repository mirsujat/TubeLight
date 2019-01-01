import React, { Component } from "react";
import Axios from "axios";
class App extends Component {
  state = {
    searchTerm: "me",
    user: ""
  };
  componentDidMount = async () => {
    const { searchTerm } = this.state;
    if (!this.state.user) {
      const { data } = await Axios.get(`https://ip.nf/${searchTerm}.json`);
      this.setState({ user: data });
      console.log("IP Info: ", this.state.user);
    }
  };

  render() {
    return (
      <div className="app">
        <h1>React Code Challenge</h1>
      </div>
    );
  }
}

export default App;
