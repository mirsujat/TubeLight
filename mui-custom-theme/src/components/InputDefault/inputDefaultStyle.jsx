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

  labelRoot: {
    ...defaultFont,
    color: "#AAAAAA !important",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "1.42857",
    top: "10px",
    "& + $underline": {
      marginTop: "0px"
    }
  },
  labelRootError: {
    color: dangerColor + " !important"
  },
  labelRootSuccess: {
    color: successColor + " !important"
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
      lineHeight: "1.42857",
      opacity: "1"
    },
    "&::placeholder": {
      color: "#AAAAAA"
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
