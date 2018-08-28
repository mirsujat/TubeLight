import { container, title } from "../../assets/jss/common-rules.jsx";

const demoStyle = {
  section: {
    padding: "70px 0"
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }
};

export default demoStyle;
