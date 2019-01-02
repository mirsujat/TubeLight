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
  componentDidUpdate = async (prevProps, prevState) => {
    const { searchTerm } = this.state;
    if (
      searchTerm !== "me" &&
      prevState.searchTerm !== searchTerm &&
      searchTerm.length === 14
    ) {
      this.searchIP();
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    this.searchIP();
  };

  searchIP = async () => {
    const { searchTerm } = this.state;
    const { data } = await Axios.get(`https://ip.nf/${searchTerm}.json`);
    this.setState({ user: data, searchTerm: data.ip.ip });
  };
  render() {
    const { user } = this.state;
    let content = <div>Loading...</div>;
    if (user) {
      content = (
        <div className="content">
          <ul>
            <li>
              <span>IP Address: </span>
              {user.ip.ip}
            </li>
            <li>
              <span>Hostname: </span>
              {user.ip.hostname}
            </li>
            <li>
              <span>City: </span>
              {user.ip.city}
            </li>
            <li>
              <span>Country: </span>
              {user.ip.country}
            </li>
          </ul>
        </div>
      );
    }
    return (
      <div className="app">
        <h1>SEARCH IP ADDRESS</h1>
        <div className="seacrh-bar">
          <form onSubmit={this.handleSubmit} className="search-form">
            <input
              type="text"
              name="searchTerm"
              value={this.state.searchTerm}
              onChange={e => this.setState({ searchTerm: e.target.value })}
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
