import React, { useState, useEffect } from "react";
import Axios from "axios";
import Input from "../../components/input/Input";

const HomePage = () => {
  const [values, setValues] = useState({ ip: "me" });
  const [userIp, setUserIp] = useState({});

  useEffect(() => {
    search();
  }, []);

  const handleSubmit = event => {
    if (event) event.preventDefault();
    search();
  };

  const handleChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  const search = () => {
    Axios.get(`https://ip.nf/${values.ip}.json`).then(res => {
      const { ip } = res.data;
      setValues({ ip: ip.ip });
      setUserIp(ip);
    });
  };

  let content = null;
  if (userIp.ip) {
    console.log("userIp :", userIp);
    content = (
      <ul className="result">
        <li className="item">
          <span className="item-title">IP:</span>
          {userIp.ip}
        </li>
        <li className="item">
          <span className="item-title">ASN:</span>
          {userIp.asn}
        </li>
        <li className="item">
          <span className="item-title">Host Name:</span>
          {userIp.hostname}
        </li>
        <li className="item">
          <span className="item-title">Country:</span>
          {userIp.country}
        </li>
        <li className="item">
          <span className="item-title">Country Code:</span>
          {userIp.country_code}
        </li>
        <li className="item">
          <span className="item-title">City:</span>
          {userIp.city}
        </li>
        <li className="item">
          <span className="item-title">Post Code:</span>
          {userIp.post_code || "No"}
        </li>
      </ul>
    );
  }
  return (
    <div className="home">
      <h2 className="home-title">search ip</h2>

      <div className="search">
        <form className="search-form" onSubmit={handleSubmit}>
          <Input
            type="text"
            name="ip"
            value={values.ip}
            onChange={handleChange}
          ></Input>
          <button type="submit" className="search-btn">
            search
          </button>
        </form>

        <div className="search-result">{content}</div>
      </div>
    </div>
  );
};

export default HomePage;
