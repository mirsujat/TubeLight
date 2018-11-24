import React from "react";
const Detail = ({
  ip,
  asn,
  hostname,
  city,
  postCode,
  country,
  countryCode,
  latitude,
  longitude
}) => {
  return (
    <div className="content">
      <ul>
        <li>
          <span className="label">IP Address: </span>
          {ip}
        </li>
        <li>
          <span className="label">ASN Name: </span>
          {asn}
        </li>
        <li>
          <span className="label">Host Name: </span>
          {hostname}{" "}
        </li>
        <li>
          <span className="label">City: </span>
          {city}{" "}
        </li>
        <li>
          <span className="label">Post Code: </span>
          {postCode}{" "}
        </li>
        <li>
          <span className="label">Country: </span>
          {country}{" "}
        </li>
        <li>
          <span className="label">Country Code: </span>
          {countryCode}{" "}
        </li>
        <li>
          <span className="label">Latitude: </span>
          {latitude}{" "}
        </li>
        <li>
          <span className="label">Longitude: </span>
          {longitude}{" "}
        </li>
      </ul>
    </div>
  );
};

export default Detail;
