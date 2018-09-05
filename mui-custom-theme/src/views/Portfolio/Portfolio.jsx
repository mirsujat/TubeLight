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
import imageP1 from "../../assets/img/portfolio/p1.png";
import imageP2 from "../../assets/img/portfolio/p2.png";
import imageP3 from "../../assets/img/portfolio/p3.png";
import imageP4 from "../../assets/img/portfolio/p4.png";
import imageP5 from "../../assets/img/portfolio/p5.png";
import imageP6 from "../../assets/img/portfolio/p6.png";
import imageP7 from "../../assets/img/portfolio/p7.png";
import imageP8 from "../../assets/img/portfolio/p8.png";
import imageP9 from "../../assets/img/portfolio/p9.png";
import imageP10 from "../../assets/img/portfolio/p10.png";
import imageP11 from "../../assets/img/portfolio/p11.png";
import imageP12 from "../../assets/img/portfolio/p12.png";
import imageP13 from "../../assets/img/portfolio/p13.png";
import imageP14 from "../../assets/img/portfolio/p14.png";
import imageP15 from "../../assets/img/portfolio/p15.jpg";
import imageP16 from "../../assets/img/portfolio/p16.png";
import imageP17 from "../../assets/img/portfolio/p17.png";
import imageP18 from "../../assets/img/portfolio/p18.png";
import imageP19 from "../../assets/img/portfolio/p19.png";
import imageP20 from "../../assets/img/portfolio/p20.png";

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
      <section className={classes.portfolio}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <h1>Make Your Dream Come True!</h1>
            <img
              src={imageP20}
              alt="Bg Image"
              className={classes.sectionImage}
            />
          </GridItem>
        </GridContainer>
      </section>
    </Fragment>
  );
};

export default withStyles(portfolioStyle)(portfolio);
