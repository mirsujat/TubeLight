import React from "react";
import { Link } from "react-router-dom";

//Material-ui core component
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "../../../components/Grid/GridContainer.jsx";
import GridItem from "../../../components/Grid/GridItem.jsx";
import Card from "../../../components/Card/Card.jsx";
import CardBody from "../../../components/Card/CardBody/CardBody.jsx";
import imageStyle from "../../../assets/jss/styles/imageStyle.jsx";
import { card, cardTitle } from "../../../assets/jss/common-rules.jsx";

//Image
import image100 from "../../../assets/img/blog/100.jpg";
import image102 from "../../../assets/img/blog/102.jpg";
import image101 from "../../../assets/img/blog/101.jpg";
import image104 from "../../../assets/img/blog/104.jpg";
import image105 from "../../../assets/img/blog/105.jpg";
import image106 from "../../../assets/img/blog/106.jpg";
import image1 from "../../../assets/img/blog/1.jpg";
import image2 from "../../../assets/img/blog/2.jpg";
import image3 from "../../../assets/img/blog/3.jpg";
import image4 from "../../../assets/img/blog/4.jpg";
import image5 from "../../../assets/img/blog/5.jpg";
import image6 from "../../../assets/img/blog/6.jpg";
import image7 from "../../../assets/img/blog/7.jpg";
import image8 from "../../../assets/img/blog/8.jpg";
import image9 from "../../../assets/img/blog/9.jpg";
import image10 from "../../../assets/img/blog/10.jpg";
import image11 from "../../../assets/img/blog/11.jpg";
import image12 from "../../../assets/img/blog/12.jpg";
import image13 from "../../../assets/img/blog/13.jpg";
import image14 from "../../../assets/img/blog/14.jpg";
import image15 from "../../../assets/img/blog/15.jpg";
import image16 from "../../../assets/img/blog/16.jpg";
import image17 from "../../../assets/img/blog/17.jpg";
import image18 from "../../../assets/img/blog/18.jpg";
import image19 from "../../../assets/img/blog/19.jpg";
import image20 from "../../../assets/img/blog/20.jpg";

const style = {
  ...imageStyle,
  card,
  cardTitle
};

const blog = props => {
  const { classes } = props;
  return (
    <GridContainer>
      <GridItem xsm={12} sm={12} md={12}>
        <h3>Mui Custom Theme Story</h3>
      </GridItem>

      <GridItem xs={12} sm={12} md={6}>
        <Link to="/blog/item">
          <Card className={classes.card}>
            <img
              style={{ height: "600px", width: "100%", display: "block" }}
              className={classes.imageCardTop}
              src={image100}
              alt="Blog Content Image"
            />
            <CardBody>
              <h4 className={classes.cardTitle}>Lorem Ipsum is simply dummy</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </CardBody>
          </Card>
        </Link>
      </GridItem>
      <GridItem xs={12} sm={12} md={3}>
        <Link to="/blog/item">
          <Card className={classes.card}>
            <img
              style={{ height: "200px", width: "100%", display: "block" }}
              className={classes.imageCardTop}
              src={image100}
              alt="Blog Content Image"
            />
            <CardBody>
              <h4 className={classes.cardTitle}>Lorem Ipsum is simply dummy</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </CardBody>
          </Card>
        </Link>
      </GridItem>
    </GridContainer>
  );
};

export default withStyles(style)(blog);
