import { container, title } from "../../assets/jss/common-rules.jsx";

const notificationStyles = {
  section: {
    backgroundColor: "transparent",
    display: "block",
    width: "100%",
    position: "relative",
    padding: "0"
  },
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  container
};

export default notificationStyles;
