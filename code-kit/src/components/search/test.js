import React from "react";

const test = () => (
  <div>
    {errors.ipaddress && (
      <p className={`input ${errors.ipaddress && "is-danger"}`}>
        {errors.ipaddress}
      </p>
    )}
  </div>
);

export default test;
