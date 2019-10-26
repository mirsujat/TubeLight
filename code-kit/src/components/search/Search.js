import React, { useState, useEffect } from "react";
import Axios from "axios";

import Input from "../input/Input";
import { validateIp } from "../../validators/validators";

const Search = () => {
  const [values, setValues] = useState({ searchTerm: "me", userIp: null });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    search();
  }, []);

  const handleSubmit = event => {
    if (event) event.preventDefault();
    setErrors(validateIp(values));
    search();
    setIsSubmitting(true);
  };

  const handleChange = event => {
    if (event) event.persist();
    setValues(() => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  function search() {
    Axios.get(` https://ip.nf/${values.searchTerm}.json`).then(res => {
      const { ip } = res.data;
      setValues({ searchTerm: ip.ip, userIp: ip });
      setErrors({});
    });
  }

  let content = null;
  if (values.userIp) {
    content = (
      <ul className="result">
        <li>
          <span className="title">IP: </span>
          {values.userIp.ip}
        </li>
        <li>
          <span className="title">ASN: </span>
          {values.userIp.asn}
        </li>
        <li>
          <span className="title">Country: </span>
          {values.userIp.country}
        </li>
        <li>
          <span className="title">Country Code: </span>
          {values.userIp.country_code}
        </li>
        <li>
          <span className="title">City: </span>
          {values.userIp.city}
        </li>
        <li>
          <span className="title">Post Code: </span>
          {values.userIp.post_code}
        </li>
      </ul>
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
        >
          {errors.searchTerm && (
            <p className={`input ${errors.searchTerm && "is-danger"}`}>
              {errors.searchTerm}
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
