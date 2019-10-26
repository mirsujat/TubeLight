import React, { useState, useEffect } from "react";
import Axios from "axios";
import Input from "../input/Input";

const Search = () => {
  const [values, setValues] = useState({ searchTerm: "me", userIp: null });

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
    setValues(() => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  function search() {
    Axios.get(`https://ip.nf/${values.searchTerm}.json`).then(res => {
      const { ip } = res.data;
      setValues({ searchTerm: ip.ip, userIp: ip });
    });
  }

  let content = null;
  if (values.userIp) {
    content = (
      <div className="content">
        <ul className="user-info">
          <li>
            <span className="title">IP:</span>
            {values.userIp.ip}
          </li>
          <li>
            <span className="title">ASN:</span>
            {values.userIp.asn}
          </li>
          <li>
            <span className="title">Country:</span>
            {values.userIp.country}
          </li>
          <li>
            <span className="title">Country Code:</span>
            {values.userIp.country_code}
          </li>
          <li>
            <span className="title">City:</span>
            {values.userIp.city}
          </li>
          <li>
            <span className="title">Post Code:</span>
            {values.userIp.post_code}
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="searchTerm"
          value={values.searchTerm}
          onChange={handleChange}
        ></Input>
        <button type="submit" className="search-btn">
          search
        </button>
      </form>
      {content}
    </div>
  );
};

export default Search;
