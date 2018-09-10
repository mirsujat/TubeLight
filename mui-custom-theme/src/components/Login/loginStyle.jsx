import { title } from "../../assets/jss/common-rules.jsx";
import demoStyle from "../Input/demoStyle.jsx";

const loginStyle = {
  ...demoStyle,
  header: {
    ...title,
    textAlign: "center",
    textTransform: "uppercase",
    borderBottom: "1px solid #dad8d8"
  },
  input: {
    flexBasis: "343px"
  },
  submitButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "30px"
  }
};

export default loginStyle;
