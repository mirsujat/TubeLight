import React, { Component } from "react";
import Axios from "axios";
class App extends Component {
  state = {
    searchTerm: "me",
    user: ""
  };
  componentDidMount = async () => {
    const { searchTerm, user } = this.state;
    if (!user) {
      const { data } = await Axios.get(`https://ip.nf/${searchTerm}.json`);
      this.setState({ user: data, searchTerm: data.ip.ip });
    }
  };
  componentDidUpdate = async (prevProps, prevState) => {
    const { searchTerm } = this.state;
    if (
      prevState.searchTerm !== "me" &&
      prevState.searchTerm !== searchTerm &&
      searchTerm.length === 14
    ) {
      const { data } = await Axios.get(`https://ip.nf/${searchTerm}.json`);
      this.setState({ user: data, searchTerm: data.ip.ip });
      console.log("Update IP Info: ", this.state.user);
    }
  };

  render() {
    const { user } = this.state;
    console.log("user: ", this.state.user);
    let content = <div>Loading...</div>;
    if (user) {
      content = (
        <div className="ip-address">
          <ul>
            <li>
              <span>IP Address: </span> {user.ip.ip}
            </li>
            <li>
              <span>Hostname: </span> {user.ip.hostname}
            </li>
            <li>
              <span>City: </span> {user.ip.city}
            </li>
            <li>
              <span>Country: </span> {user.ip.country}
            </li>
          </ul>
        </div>
      );
    }
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
        {content}
      </div>
    );
  }
}

export default App;
