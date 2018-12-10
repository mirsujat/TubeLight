import React, { Component } from "react";
import "./App.css";
import Axios from "axios";

class App extends Component {
  state = {
    searchTerm: "me",
    user: ""
  };
  componentDidMount = () => {
    if (!this.state.user) {
      this.searchIP();
    }
  };
  componentDidUpdate = (prevProps, prevState) => {
    const { searchTerm } = this.state;
    if (
      prevState.searchTerm !== "me" &&
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
    try {
      const { data } = await Axios.get(`https://ip.nf/${searchTerm}.json`);
      this.setState({ user: data, searchTerm: data.ip.ip });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { user } = this.state;
    let content = <div>There is no content to show.</div>;
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
        <div className="header">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={e => this.setState({ searchTerm: e.target.value })}
            />
            <button type="type">Submit</button>
          </form>
        </div>

        {content}
      </div>
    );
  }
}

export default App;
