import React from "react";
import gitLogo from "./GitHub-Mark-Light-64px.png";
import "./footer.styles.scss";

const Footer = () => {
  let date = new Date().getFullYear();
  let github = "https://github.com/mirsujat/TubeLight/tree/master/crown-shop";
  let angelList = "https://angel.co/u/mir-sujat";
  return (
    <div className="footer">
      <div className="footer-left">
        <h6>
          Develop and design by mir sujat &copy; {date}, contact:
          mir.sujat@gmail.com{" "}
        </h6>
      </div>
      <div className="hire-me">
        <h4 className="hire-me">
          <a href={angelList} target="_blank" rel="noopener noreferrer">
            Hire Me!
          </a>
        </h4>
      </div>
      <div className="footer-right">
        <span className="source-code">Find Source code: </span>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <img src={gitLogo} alt="gitHub link" heigth="24" width="24"></img>
        </a>
      </div>
    </div>
  );
};

export default Footer;
