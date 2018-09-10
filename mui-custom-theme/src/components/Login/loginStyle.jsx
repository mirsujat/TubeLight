import { title } from "../../assets/jss/common-rules.jsx";
import demoStyle from "../Input/demoStyle.jsx";

const loginStyle = {
  ...demoStyle,
  header: {
    ...title,
    textAlign: "center",
    borderBottom: "1px solid #dad8d8"
  },
  email: {
    flexBasis: "343px"
  }
};

export default loginStyle;
