import { container, title } from "../../assets/jss/common-rules.jsx";

const demoStyle = {
  section: {
    padding: "0"
  },
  container,
  title: {
    ...title,

    minHeight: "32px",
    textDecoration: "none"
  }
};

export default demoStyle;
