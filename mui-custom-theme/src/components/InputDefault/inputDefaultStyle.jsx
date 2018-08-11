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
    backgroundColor: "red",
    cursor: "pointer",
    "&:focus": {
      backgroundColor: "yellow"
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
    margin: "0 0 17px 0",
    paddingTop: "27px",
    position: "relative",
    "& svg,& .fab,& .far,& .fal,& .fas": {
      color: "#495057"
    }
  },

  input: {
    color: "#495057",
    border: " 1px solid #D2D2D2 !important",
    "&,&::placeholder": {
      fontSize: "14px",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: "400",
      lineHeight: "14px",
      opacity: "1"
    },
    "&::placeholder": {
      color: "#AAAAAA"
    },
    "&:focus": {
      border: " 1px solid red !important"
    }
  },
  whiteInput: {
    "&,&::placeholder": {
      color: "#555",
      opacity: "1"
    }
  }
};

export default inputDefaultStyle;
