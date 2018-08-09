const demoStyle = {
  inputRootCustomClasses: {
    margin: "0!important"
  },
  inputDefault: {
    borderRadius: 4,
    backgroundColor: "white",
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 12px",
    width: "calc(100% - 24px)",
    transition: ["border-color", "box-shadow"],
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  },
  searchIcon: {
    width: "20px",
    height: "20px",
    color: "inherit"
  }
};

export default demoStyle;
