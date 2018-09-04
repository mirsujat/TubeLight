import React, { Fragment } from "react";
// react component for creating beautiful carousel
import SlickSlider from "react-slick";

//Material-ui core component
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import Card from "../../components/Card/Card.jsx";
import CardBody from "../../components/Card/CardBody/CardBody.jsx";
import portfolioStyle from "./portfolioStyle.jsx";

//Image
import image1 from "../../assets/img/bg1.jpg";
import image2 from "../../assets/img/bg2.jpg";
import image3 from "../../assets/img/bg3.jpg";

const portfolio = props => {
  const { classes } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <Fragment>
      <section className={classes.portfolioHeader}>
        <SlickSlider {...settings}>
          <div>
            <img src={image1} alt="First slide" className="slick-image" />
            <div className="slick-caption">
              <h4>Phantom Vision Pro Dynamic Fit FG</h4>
            </div>
          </div>
          <div>
            <img src={image2} alt="Second slide" className="slick-image" />
            <div className="slick-caption">
              <h4>Converse Custom Chuck Taylor Premium Leather Low Top</h4>
            </div>
          </div>
          <div>
            <img src={image3} alt="Third slide" className="slick-image" />
            <div className="slick-caption">
              <h4>Air Huarache Drift Premium</h4>
            </div>
          </div>
        </SlickSlider>
      </section>
      <div>Porfolio</div>;
    </Fragment>
  );
};

export default withStyles(portfolioStyle)(portfolio);
