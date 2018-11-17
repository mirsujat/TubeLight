import React, { Component } from "react";
import Form from "./components/Form";
import IpDetail from "./components/IpDetail";
class App extends Component {
  state = {
    ip: "me",
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
    errorMsg: ""
  };

  componentDidMount() {
    this.getIp();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.hostname !== prevState.hostname) {
      this.getIp();
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.getIp();
  };
  getIp = async () => {
    const IP = this.state.ip;
    try {
      const response = await fetch(`https://ip.nf/${IP}.json`, {
        method: "GET"
      });
      const data = await response.json();
      this.setState({
        ip: data.ip.ip,
        asn: data.ip.asn,
        netmask: data.ip.netmask,
        hostname: data.ip.hostname,
        city: data.ip.city,
        post_code: data.ip.post_code,
        country: data.ip.country,
        country_code: data.ip.country_code,
        latitude: data.ip.latitude,
        longitude: data.ip.longitude,
        error: false,
        errorMag: ""
      });
    } catch (error) {
      this.setState({
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
        error: true,
        errorMsg: "Bad request: Invalid IP Address!!!"
      });
    }
  };

  render() {
    const { error, errorMsg } = this.state;
    let content = null;
    if (error && errorMsg) {
      content = (
        <div style={{ color: "red" }}>
          <h4>{this.state.errorMsg}</h4>
          <p>Please type [me] on the input field to get your IP Information!</p>
        </div>
      );
    } else {
      content = (
        <div>
          <IpDetail
            ip={this.state.ip}
            asn={this.state.asn}
            netmask={this.state.netmask}
            hostname={this.state.hostname}
            city={this.state.city}
            postCode={this.state.post_code}
            country={this.state.country}
            countryCode={this.state.country_code}
            latitude={this.state.latitude}
            longitude={this.state.longitude}
          />
        </div>
      );
    }
    return (
      <div className="ip-finder-app">
        <section className="header">
          <h3>IP Finder</h3>
          <Form
            type="text"
            name="ip"
            value={this.state.ip}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </section>
        <section className="content">{content}</section>
      </div>
    );
  }
}

export default App;
