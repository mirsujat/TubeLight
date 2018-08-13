const nativeSelectsStyle = {
  formControl: {
    display: "block",
    position: "relative"
  },
  inputLabel: {
    display: "inline-block",
    position: "relative",
    marginRight: "10px",
    marginLeft: "10px",
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
    width: "100px",
    cursor: "pointer",
    minWidth: "50px",
    userSelect: "none",
    background: "white",
    border: " 1px solid #4ba6e4 !important",
    "&:focus": {
      background: "white",
      border: " 1px solid #4ba6e4 !important"
    }
  }
};

export default nativeSelectsStyle;
