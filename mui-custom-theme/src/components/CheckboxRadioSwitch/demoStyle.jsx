import { container, title } from "../../assets/jss/common-rules.jsx";
import checkboxRadioSwitch from "./checkboxRadioSwitchStyle.jsx";

const demoStyle = {
  sections: {
    padding: "70px 0"
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  space50: {
    height: "50px",
    display: "block"
  },
  space70: {
    height: "70px",
    display: "block"
  },
  icons: {
    width: "17px",
    height: "17px",
    color: "#FFFFFF"
  },
  ...checkboxRadioSwitch
};

export default demoStyle;
