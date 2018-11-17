import React, { Component } from "react";

import "./App.css";

// ! fix this in this week
// TODO: "https://ip.nf/me.json"
// Color Highlighted blue #04c185

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
    longtitude: null
  };

  async componentDidMount() {
    this.getIp();
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
  getIp = async e => {
    const IP = this.state.ip;
    const fetchData = await fetch(`https://ip.nf/${IP}.json`, {
      method: "GET"
    });
    const res = await fetchData;
    const data = await res.json();

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
      longitude: data.ip.longitude
    });
  };

  render() {
    const {
      ip,
      asn,
      netmask,
      hostname,
      city,
      post_code,
      country,
      country_code,
      latitude,
      longitude
    } = this.state;
    return (
      <div className="App">
        <div className="header">
          <form onSubmit={this.handleSubmit} className="form">
            <div className="form-group">
              <h3
                style={{
                  textAlign: "center",
                  fontSize: "42px",
                  color: "white",
                  letterSpacing: "0.75rem"
                }}
              >
                IP Finder
              </h3>
              <input
                type="text"
                name="ip"
                value={this.state.ip}
                onChange={this.handleChange}
              />
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div className="content">
          <div className="ip-address">
            <div className="card">
              <div className="card-heading">Your IP Information</div>
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-item">
                    <span className="ip-info">IP Address:</span> {ip}
                  </li>
                  <li className="list-item">
                    {" "}
                    <span className="ip-info">ASN Name:</span> {asn}
                  </li>
                  <li className="list-item">
                    {" "}
                    <span className="ip-info">Net Mask:</span> {netmask}
                  </li>
                  <li className="list-item">
                    <span className="ip-info">Host Name: </span>
                    {hostname}
                  </li>
                  <li className="list-item">
                    <span className="ip-info">City: </span>
                    {city}
                  </li>
                  <li className="list-item">
                    <span className="ip-info">Post Code: </span>
                    {post_code}
                  </li>
                  <li className="list-item">
                    <span className="ip-info">Country:</span> {country}
                  </li>
                  <li className="list-item">
                    {" "}
                    <span className="ip-info">Country Code: </span>
                    {country_code}
                  </li>
                  <li className="list-item">
                    <span className="ip-info">Latitude:</span> {latitude}
                  </li>
                  <li className="list-item">
                    <span className="ip-info">Longitude: </span>
                    {longitude}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
