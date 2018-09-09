const blogStyle = {
  blog: {
    display: "inline-block",
    position: "relative",
    minHeight: "1px",
    margin: "4px"
  },
  space50: {
    display: "block",
    minHeight: "1px",
    marginTop: "40px",
    padding: "0 8px 0 5px"
  },
  blogImg: {
    display: "block",
    height: "210px",
    width: "100%"
  },

  "@media (min-width: 576px)": {
    blogImg: {
      height: "279px",
      width: "100%"
    }
  },
  "@media (min-width: 768px)": {
    blogImg: {
      height: "400px",
      width: "100%"
    }
  },
  "@media (min-width: 992px)": {
    blogImg: {
      height: "600px",
      width: "100%"
    }
  },
  "@media (min-width: 1200px)": {
    blogImg: {
      height: "600px",
      width: "100%"
    }
  }
};

export default blogStyle;
