const nativeSelectsStyle = {
  formControl: {
    display: "block",
    position: "relative",
    width: "250px",
    marginTop: "15px",
    marginRight: "15px",
    marginBottom: "15px",
    marginLeft: "15px"
  },

  label: {
    display: "inline",
    position: "relative",
    marginRight: "10px",
    backgroundColor: "white",
    fontSize: "0.93rem",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "400",
    lineHeight: "0.95rem",
    color: "#757575"
  },

  select: {
    width: "100px",
    cursor: "pointer",
    minWidth: "16px",
    userSelect: "none",
    paddingTop: "4px",
    paddingRight: "82px",
    paddingBottom: "4px",
    paddingLeft: "10px",
    border: "1px solid #c8cbce !important",
    background: "white",
    fontSize: "0.93rem",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "400",
    lineHeight: "0.95rem",
    color: "#757575",
    "&:focus": {
      background: "white",
      border: "1px solid #6caeef !important",
      outline: "0"
    }
  },
  option: {
    display: "block",
    position: "relative",
    fontSize: "16px",
    fontWeight: "400",
    whiteSpace: "pre",
    minHeight: " 25px",
    padding: "5px 10px 5px"
  }
};

export default nativeSelectsStyle;
