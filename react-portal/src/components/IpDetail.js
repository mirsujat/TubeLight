import React from "react";

const IpDetail = ({
  ip,
  asn,
  netmask,
  hostname,
  city,
  postCode,
  country,
  countryCode,
  latitude,
  longitude
}) => {
  let Detail = (
    <div>
      <p>No Content To Show!</p>
    </div>
  );
  if (asn && netmask) {
    Detail = (
      <div className="ip-detail">
        <div className="card">
          <div className="card-header">Card Header</div>
          <div className="card-body">
            <ul>
              <li className="list-item">
                <span>IP: </span> {ip}
              </li>
              <li className="list-item">
                <span>ASN Name: </span> {asn}
              </li>
              <li className="list-item">
                <span>Net Mask: </span> {netmask}
              </li>
              <li className="list-item">
                <span>Host Name: </span> {hostname}
              </li>
              <li className="list-item">
                <span>City: </span> {city}
              </li>
              <li className="list-item">
                <span>Post Code: </span> {postCode}
              </li>
              <li className="list-item">
                <span>Country: </span> {country}
              </li>
              <li className="list-item">
                <span>Country Code: </span> {countryCode}
              </li>
              <li className="list-item">
                <span>Latitude: </span> {latitude}
              </li>
              <li className="list-item">
                <span>Longitude: </span> {longitude}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  return <div>{Detail}</div>;
};

export default IpDetail;
