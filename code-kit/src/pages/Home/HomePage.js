import React, { useState, useEffect } from "react";
import Axios from "axios";
import Input from "../../components/input/Input";

const HomePage = () => {
  const [values, setValues] = useState({ ip: "me" });
  const [userIp, setUserIp] = useState({});

  useEffect(() => {
    search();
    // eslint-disable-next-line
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

  let content = <div>...Loading</div>;
  if (userIp.ip) {
    content = (
      <ul className="result" data-testid="result">
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
    <div className="home" data-testid="homepage">
      <h2 className="home-title">search ip</h2>

      <div className="search">
        <form
          className="search-form"
          onSubmit={handleSubmit}
          data-testid="search-form"
        >
          <Input
            id="ip"
            type="text"
            name="ip"
            value={values.ip}
            onChange={handleChange}
            datatestid="ip"
          ></Input>
          <button type="submit" className="search-btn" data-testid="search-btn">
            search
          </button>
        </form>

        <div className="search-result" data-testid="search-result">
          {content}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
