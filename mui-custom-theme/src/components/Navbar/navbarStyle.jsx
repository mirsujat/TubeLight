import { container, title } from "../../assets/jss/common-rules.jsx";
import headerLinksStyle from "../Header/headerLinksStyle.jsx";

const navbarStyle = theme => ({
  section: {
    padding: "70px 0",
    paddingTop: "0"
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  navbar: {
    marginBottom: "-20px",
    zIndex: "100",
    position: "relative",
    overflow: "hidden",
    "& header": {
      borderRadius: "0"
    }
  },
  navigation: {
    backgroundPosition: "center center",
    backgroundSize: "cover",
    marginTop: "0",
    minHeight: "740px"
  },
  formControl: {
    margin: "0 !important",
    paddingTop: "0"
  },
  inputRootCustomClasses: {
    margin: "0!important"
  },

  searchIcon: {
    width: "20px",
    height: "20px",
    color: "inherit"
  },
  ...headerLinksStyle(theme),
  img: {
    width: "40px",
    height: "40px",
    borderRadius: "50%"
  },
  imageDropdownButton: {
    padding: "0px",
    borderRadius: "50%"
  },
  "@media (min-width: 576px)": {
    imageDropdownButton: {
      marginTop: "8px",
      marginBottom: "8px",
      marginLeft: "15px"
    }
  },
  "@media (min-width: 768px)": {
    imageDropdownButton: {
      top: "4px",
      marginTop: "0px",
      marginBottom: "0px",
      marginLeft: "15px"
    }
  },
  "@media (min-width: 992px)": {
    imageDropdownButton: {
      top: "4px",
      marginTop: "0px",
      marginBottom: "0px",
      marginLeft: "15px"
    }
  },
  "@media (min-width: 1200px)": {
    imageDropdownButton: {
      top: "4px",
      marginTop: "0px",
      marginBottom: "0px",
      marginLeft: "15px"
    }
  }
});

export default navbarStyle;
