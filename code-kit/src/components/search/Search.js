import React, { useState, useEffect } from "react";
import Axios from "axios";

import { validateIp } from "../../validators/validators";
import Input from "../input/Input";

const Search = () => {
  const [values, setValues] = useState({ ipaddress: "me", userIp: null });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    search();
  }, []);

  const handleSubmit = event => {
    if (event) event.preventDefault();
    setErrors(validateIp(values.ipaddress));
    search();
    setIsSubmitting(true);
  };
  const handleChange = event => {
    if (event) event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  function search() {
    Axios.get(`https://ip.nf/${values.ipaddress}.json`).then(res => {
      const { ip } = res.data;
      setValues({ userIp: ip, ipaddress: ip.ip });
      setErrors({});
    });
  }

  let content = null;
  if (values.userIp) {
    content = (
      <div className="search-content">
        <p>
          <span className="title">IP:</span>
          {values.userIp.ip}
        </p>
        <p>
          <span className="title">ASN:</span>
          {values.userIp.asn}
        </p>
        <p>
          <span className="title">Country:</span>
          {values.userIp.country}
        </p>
        <p>
          <span className="title">Country Code:</span>
          {values.userIp.country_code}
        </p>
        <p>
          <span className="title">City:</span>
          {values.userIp.city}
        </p>
        <p>
          <span className="title">Post Code:</span>
          {values.userIp.post_code}
        </p>
      </div>
    );
  }

  return (
    <div className="search-page">
      <form className="search" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="ipaddress"
          value={values.ipaddress}
          onChange={handleChange}
        >
          {errors.ipaddress && (
            <p className={`input ${errors.ipaddress && "is-danger"}`}>
              {errors.ipaddress}
            </p>
          )}
        </Input>
        <button type="submit" className="search-btn">
          search
        </button>
      </form>
      {content}
    </div>
  );
};

export default Search;
