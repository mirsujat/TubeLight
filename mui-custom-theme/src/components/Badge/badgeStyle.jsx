import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  goldColor
} from "../../assets/jss/common-rules.jsx";

const badgeStyle = {
  badge: {
    marginRight: "3px",
    borderRadius: "12px",
    padding: "5px 12px",
    textTransform: "uppercase",
    fontSize: "10px",
    fontWeight: "500",
    lineHeight: "1",
    color: "#fff",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "baseline",
    display: "inline-block"
  },
  primary: {
    backgroundColor: primaryColor
  },
  warning: {
    backgroundColor: warningColor
  },
  danger: {
    backgroundColor: dangerColor
  },
  success: {
    backgroundColor: successColor
  },
  info: {
    backgroundColor: infoColor
  },
  gold: {
    backgroundColor: goldColor
  },
  gray: {
    borderColor: "rgba(17, 17, 17, 0.41)",
    backgroundColor: "rgba(17, 17, 17, 0.41)"
  },
  round: {
    width: "14px",
    height: "14px",
    padding: "6px",
    borderRadius: "30px"
  }
};

export default badgeStyle;
