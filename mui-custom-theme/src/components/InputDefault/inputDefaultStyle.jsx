import {
  primaryColor,
  dangerColor,
  successColor,
  defaultFont
} from "../../assets/jss/common-rules.jsx";

const inputDefaultStyle = {
  disabled: {
    "&:before": {
      borderColor: "transparent !important"
    }
  },
  adornmentRoot: {
    backgroundColor: "#bcc1c1",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#bcc1c1"
    }
  },
  adornmentIcon: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
    opacity: "0.57",
    "&:hover": {
      opacity: "0.87"
    }
  },
  feedback: {
    position: "absolute",
    bottom: "3px",
    right: "0",
    zIndex: "2",
    display: "block",
    width: "1em",
    height: "1em",
    textAlign: "center",
    pointerEvents: "none"
  },
  feedbackRight: {
    marginRight: "22px"
  },
  formControl: {
    display: "flex",
    margin: "15px 6px 6px 15px",
    paddingTop: "0",
    position: "relative",
    "& svg,& .fab,& .far,& .fal,& .fas": {
      color: "#495057"
    }
  },
  formControlTextArea: {
    display: "flex",
    margin: "15px 6px 55px 15px",
    paddingTop: "0",
    position: "relative",
    "& svg,& .fab,& .far,& .fal,& .fas": {
      color: "#495057"
    }
  },
  input: {
    padding: "6px 10px",
    color: "#495057",
    border: "1px solid #D2D2D2 !important",
    boxShadow: "inset 0 1px 2px #eee",
    "&,&::placeholder": {
      fontSize: "0.75rem",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: "400",
      lineHeight: "0.85rem",
      opacity: "1"
    },
    "&::placeholder": {
      color: "#AAAAAA"
    },
    "&:focus": {
      border: " 1px solid #4ba6e4 !important"
    }
  },
  whiteInput: {
    "&,&::placeholder": {
      color: "#555",
      opacity: "1"
    }
  },
  inputLable: {
    display: "inline-block",
    width: "70px",
    fontSize: "0.75rem",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "500",
    lineHeight: "0.85rem",
    color: "#a7a4a4",
    textAlign: "right"
  },
  textArea: {
    minHeight: "50px",
    height: "auto",
    overflow: "hidden",
    width: "96%",
    marginBottom: "15px",
    padding: "6px 10px",
    color: "#495057",
    border: "1px solid #D2D2D2 !important",
    boxShadow: "inset 0 1px 2px #eee",
    "&,&::placeholder": {
      fontSize: "0.75rem",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: "400",
      lineHeight: "0.85rem",
      opacity: "1"
    },
    "&::placeholder": {
      color: "#AAAAAA"
    },
    "&:focus": {
      border: " 1px solid #4ba6e4 !important"
    }
  }
};

export default inputDefaultStyle;
