import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./spinner.styles";

const SpinnerHOC = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer></SpinnerContainer>
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps}></WrappedComponent>
    );
  };
  return Spinner;
};

export default SpinnerHOC;
