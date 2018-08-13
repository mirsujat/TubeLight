const nativeSelectsStyle = {
  formControl: {
    display: "block",
    position: "relative",
    width: "250px",
    backgroundColor: "#eee",
    marginRight: "15px",
    marginLeft: "15px"
  },
  marginTop: {
    marginTop: "0px"
  },
  label: {
    display: "inline",
    position: "relative",
    marginRight: "10px",
    backgroundColor: "yellow",
    color: "red"
  },
  input: {
    padding: "6px 10px",
    color: "#495057",
    border: "1px solid #D2D2D2 !important",
    "&,&::placeholder": {
      fontSize: "0.93rem",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: "400",
      lineHeight: "0.95rem",
      opacity: "1"
    },
    "&::placeholder": {
      color: "#AAAAAA"
    },
    "&:focus": {
      border: " 1px solid #4ba6e4 !important",
      backgroundColor: "white"
    }
  },
  select: {
    display: "block",
    cursor: "pointer",
    minWidth: "150px",
    padding: "3px",
    userSelect: "none",
    background: "white",
    border: " 1px solid #4ba6e4 !important",
    "&:focus": {
      background: "white",
      outline: "0"
    }
  },
  optionList: {
    display: "block",
    position: "relative",
    minHeight: "2rem",
    width: "auto",
    lineHeight: "2rem",
    padding: ""
    fontSize: "14px",
    fontWeight: "normal",
    whiteSpace: "pre"
  }
};

export default nativeSelectsStyle;
