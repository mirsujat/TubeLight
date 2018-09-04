import React, { Component } from "react";
// react component for creating beautiful carousel
import SlickSlider from "react-slick";

// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// material-ui core components
import GridContainer from "../Grid/GridContainer.jsx";
import GridItem from "../Grid/GridItem.jsx";
import Card from "../Card/Card.jsx";

import image1 from "../../assets/img/bg1.jpg";
import image2 from "../../assets/img/bg2.jpg";
import image3 from "../../assets/img/bg3.jpg";

class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <SlickSlider {...settings}>
              <div>
                <img src={image1} alt="First slide" className="slick-image" />
                <div className="slick-caption">
                  <h4>
                    <LocationOn className="slick-icons" />
                    Phantom Vision Pro Dynamic Fit FG
                  </h4>
                </div>
              </div>
              <div>
                <img src={image2} alt="Second slide" className="slick-image" />
                <div className="slick-caption">
                  <h4>
                    <LocationOn className="slick-icons" />
                    Converse Custom Chuck Taylor Premium Leather Low Top
                  </h4>
                </div>
              </div>
              <div>
                <img src={image3} alt="Third slide" className="slick-image" />
                <div className="slick-caption">
                  <h4>
                    <LocationOn className="slick-icons" />
                    Air Huarache Drift Premium
                  </h4>
                </div>
              </div>
            </SlickSlider>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default Carousel;
