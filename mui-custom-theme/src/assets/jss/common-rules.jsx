// ##############################
// Author: Mir sujat
// Email: mir.sujat@gmail.com
// Common Rules that are used on more than one component
// #############################

const drawerWidth = 260;

const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};

const conatinerFluid = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%"
};
const container = {
  ...conatinerFluid,
  "@media (min-width: 576px)": {
    maxWidth: "100%"
  },
  "@media (min-width: 768px)": {
    maxWidth: "100%"
  },
  "@media (min-width: 992px)": {
    maxWidth: "100%"
  },
  "@media (min-width: 1200px)": {
    maxWidth: "100%"
  }
};

const boxShadow = {
  boxShadow:
    "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
};

const card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
  borderRadius: "0",
  color: "rgba(0, 0, 0, 0.87)",
  background: "#fff",
  fontFamily: '"Noto Sans", sans-serif'
};

const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em"
};

const primaryColor = "#00bcd4";
const successColor = "#0097a7";
const infoColor = "#03a9f4";
const warningColor = "#ff4081";
const dangerColor = "#CC0000";
const goldColor = "#ff9800";
const colorRedOrange = "#f44336";
const colorGreen = "#4caf50";
const colorRuby = "#e91e63";
const colorWhiteSmoke = "#f5f5f5";
const greyColor = "#9e9e9e";
const textColor = "rgba(0, 0, 0, 0.07)";
const primaryTextColor = "rgba(0, 0, 0, 0.87)";
const secondaryTextColor = "rgba(0, 0, 0, 0.54)";
const alternateTextColor = "#ffffff";
const white = "#ffffff";
const borderColor = "#e0e0e0";
const disabledColor = "rgba(0, 0, 0, 0.3)";
const shadowColor = "rgba(0, 0, 0, 1)";

const primaryBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
};
const infoBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"
};
const successBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"
};
const warningBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"
};
const dangerBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"
};
const goldBoxShadow = {
  boxShadow:
    "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)"
};

const defaultCardHeader = {
  color: "#555",
  background: "rgba(232,232,232, 1)"
};
const warningCardHeader = {
  color: "#fff",
  background: warningColor
};
const successCardHeader = {
  color: "#fff",
  background: successColor
};
const dangerCardHeader = {
  color: "#fff",
  background: dangerColor
};
const infoCardHeader = {
  color: "#fff",
  background: infoColor
};
const primaryCardHeader = {
  color: "#fff",
  background: primaryColor
};
const goldCardHeader = {
  color: "#fff",
  background: goldColor
};
const cardActions = {
  margin: "0 20px 10px",
  paddingTop: "10px",
  borderTop: "1px solid #eeeeee",
  height: "auto",
  ...defaultFont
};

const cardHeader = {
  margin: "-30px 15px 0",
  borderRadius: "3px",
  padding: "15px"
};

const defaultBoxShadow = {
  border: "0",
  borderRadius: "3px",
  boxShadow:
    "0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  padding: "10px 0",
  transition: "all 150ms ease 0s"
};

const title = {
  color: "#3C4858",
  margin: "1.75rem 0 0.875rem",
  textDecoration: "none",
  fontWeight: "700",
  fontFamily: `"Roboto Slab", "Noto Sans", serif`
};

const cardTitle = {
  ...title,
  marginTop: ".625rem",
  fontSize: "1rem",
  fontWeight: "700",
  fontFamily: `"Roboto Slab", "Noto Sans", serif`
};

const cardLink = {
  marginRight: "1.25rem",
  marginLeft: "0rem",
  textDecoration: "none",
  color: infoColor,
  fontSize: "0.7213rem",
  fontWeight: "400",
  textTransform: "uppercase"
};

const cardSubtitle = {
  marginBottom: "0",
  marginTop: "-.375rem",
  fontSize: "0.7rem",
  fontWeight: "400",
  fontFamily: `"Roboto Slab", "Noto Sans", serif`
};

export {
  //variables
  drawerWidth,
  transition,
  container,
  conatinerFluid,
  boxShadow,
  card,
  defaultFont,
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  goldColor,
  greyColor,
  primaryBoxShadow,
  infoBoxShadow,
  successBoxShadow,
  warningBoxShadow,
  dangerBoxShadow,
  goldBoxShadow,
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  goldCardHeader,
  defaultCardHeader,
  cardActions,
  cardHeader,
  defaultBoxShadow,
  title,
  cardTitle,
  cardLink,
  cardSubtitle
};
