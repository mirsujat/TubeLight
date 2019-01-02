import React, { Component } from "react";
import Axios from "axios";

class App extends Component {
  state = {
    searchTerm: "me",
    user: ""
  };
  componentDidMount() {
    const { user } = this.state;
    if (!user) {
      this.searchIP();
    }
  }

  searchIP = async () => {
    const { searchTerm } = this.state;
    const { data } = await Axios.get(`https://ip.nf/${searchTerm}.json`);
    this.setState({ user: data, searchTerm: data.ip.ip });
  };
  render() {
    const { user } = this.state;
    console.log("user: ", user);
    let content = <div>Loading...</div>;
    if (user) {
      content = (
        <div className="content">
          <ul>
            <li>
              <span>IP Address: </span>
              {user.ip.ip}{" "}
            </li>
            <li>
              <span>Hostname: </span>
              {user.ip.hostname}{" "}
            </li>
            <li>
              <span>City: </span>
              {user.ip.city}{" "}
            </li>
            <li>
              <span>country: </span>
              {user.ip.country}{" "}
            </li>
          </ul>
        </div>
      );
    }
    return (
      <div className="app">
        <div className="search-bar">
          <form className="search-form">
            <input
              type="text"
              name="searchTerm"
              value={this.state.searchTerm}
              onChange={e => this.setState({ searchTerm: e.terget.value })}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        {content}
      </div>
    );
  }
}

export default App;
