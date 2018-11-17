import _ from "lodash";
import React, { Component } from "react";
import axios from "axios";
import Search from "./Search";
import Login from "./components/user/Login";
import Content from "./components/test2/Content";
import Modal from "./components/portal/Portal";
import Detail from "./components/Detail";

class App extends Component {
  state = {
    ip: "",
    asn: null,
    netmask: null,
    hostname: null,
    city: null,
    post_code: null,
    country: null,
    country_code: null,
    latitude: null,
    longitude: null,
    error: false,
    errorMsg: null,
    term: "me",
    open: false
  };
  componentDidMount() {
    this.ipSearch();
  }
  componentDidUpdate(prevProps, prevState) {
    const term = this.state.term;
    if (term !== prevState.ip && term.length === 14) {
      this.ipSearch();
    }
    if (term.length > 14) {
      alert("Max Length 14 Characters.");
    }
  }
  handleChange = e => {
    this.setState({ term: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.term.length <= 0) {
      alert("You can not submit Empty form. Please type Vaid IP Address");
    } else {
      this.ipSearch();
    }
  };
  ipSearch = async (e, term) => {
    const searchterm = this.state.term;
    console.log("Search Term:", searchterm);
    try {
      if (!this.state.ip || (this.state.ip && this.state.ip !== searchterm)) {
        const { data } = await axios.get(`https://ip.nf/${searchterm}.json`);
        this.setState({
          ip: data.ip.ip,
          asn: data.ip.asn,
          hostname: data.ip.hostname,
          city: data.ip.city,
          post_code: data.ip.post_code,
          country: data.ip.country,
          country_code: data.ip.country_code,
          latitude: data.ip.latitude,
          longitude: data.ip.longitude,
          error: false,
          errorMsg: null,
          term: data.ip.ip
        });
      }
    } catch (error) {
      this.setState({
        ip: "",
        asn: null,
        hostname: null,
        city: null,
        post_code: null,
        country: null,
        country_code: null,
        latitude: null,
        longitude: null,
        error: true,
        errorMsg: "Invalid IP Address"
      });
    }
  };
  ipSearchonChange = _.debounce(term => {
    this.ipSearch(term);
  }, 300);

  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClickClose = () => {
    this.setState({ open: false });
  };
  render() {
    const {
      ip,
      asn,
      hostname,
      city,
      post_code,
      country,
      country_code,
      latitude,
      longitude
    } = this.state;

    let content = null;
    if (this.state.error && this.state.errorMsg) {
      content = <div style={{ color: "red" }}>{this.state.errorMsg}</div>;
    } else {
      content = (
        <div>
          <Content
            ip={ip}
            hostname={hostname}
            city={city}
            country={country}
            click={this.handleClickOpen}
          />
        </div>
      );
    }
    return (
      <div className="app">
        <section className="header">
          <div>
            IP Finder{" "}
            <span onClick={this.handleClickOpen} className="login-text">
              Login
            </span>{" "}
          </div>
          <Search
            type="text"
            name="term"
            value={this.state.term}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </section>
        <section>{content}</section>
        {/* <Modal open={this.state.open} onClose={this.handleClickClose}>
          <Detail
            ip={ip}
            asn={asn}
            hostname={hostname}
            city={city}
            postCode={post_code}
            country={country}
            countryCode={country_code}
            latitude={latitude}
            longitude={longitude}
          />
          <button onClick={this.handleClickClose} className="close-btn">
            Close
          </button>
        </Modal> */}
        <Modal open={this.state.open} onClose={this.handleClickClose}>
          <button onClick={this.handleClickClose} className="close-btn">
            Close
          </button>
          <Login />
        </Modal>
      </div>
    );
  }
}

export default App;
