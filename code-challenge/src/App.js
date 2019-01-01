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
      this.setState({ user: data, searchTerm: data.ip.ip });
      console.log("IP Info: ", this.state.user);
    }
  };

  render() {
    return (
      <div className="app">
        <h1>SEARCH YOUR IP ADDRESS.</h1>
        <div className="search-bar">
          <form className="search-form">
            <input
              className="search"
              name="search"
              value={this.state.searchTerm}
              onChange={e => this.setState({ searchTerm: e.target.value })}
            />
            <button type="submit" className="search-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
