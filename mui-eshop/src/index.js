import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import lightBlue from "@material-ui/core/colors/lightBlue";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import grey from "@material-ui/core/colors/grey";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
    secondary: {
      main: green[200],
      light: green[50],
      dark: green[400]
    },
    default: {
      main: grey[300],
      light: grey[100],
      dark: grey[500]
    },
    error: {
      main: red[400],
      light: red[200],
      dark: red[600]
    },
    type: "light"
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
