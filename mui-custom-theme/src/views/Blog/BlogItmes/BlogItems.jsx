import React, { Fragment } from "react";
import { Link } from "react-router-dom";

//Material-ui core component
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "@material-ui/core/Divider";
import GridContainer from "../../../components/Grid/GridContainer.jsx";
import GridItem from "../../../components/Grid/GridItem.jsx";
import Card from "../../../components/Card/Card.jsx";
import CardBody from "../../../components/Card/CardBody/CardBody.jsx";

import imageStyle from "../../../assets/jss/styles/imageStyle.jsx";
import blogStyle from "./blogStyle.jsx";
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

const styles = {
  ...imageStyle,
  ...blogStyle,
  card,
  cardTitle
};

const blog = props => {
  const { classes } = props;
  return (
    <Fragment>
      <section className={classes.blogHeader}>
        <GridContainer>
          <GridItem xsm={12} sm={12} md={12}>
            <h2>Mui Custom Theme Story</h2>
          </GridItem>

          <GridItem xs={12} sm={12} md={5}>
            <Link to="/blog/item">
              <Card className={classes.card}>
                <img
                  className={classes.imageCardTop + " " + classes.blogImg}
                  src={image105}
                  alt="Blog Content Image"
                />
                <CardBody>
                  <h4 className={classes.cardTitle}>
                    Lorem Ipsum is simply dummy
                  </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </CardBody>
              </Card>
            </Link>
          </GridItem>
          <GridItem
            xs={12}
            sm={12}
            md={3}
            style={{ paddingLeft: "0", paddingRight: "0" }}
          >
            <GridContainer>
              <GridItem xs={12} sm={6} md={12}>
                <Link to="/blog/item">
                  <Card className={classes.card}>
                    <img
                      style={{
                        height: "248px",
                        width: "100%",
                        display: "block"
                      }}
                      className={classes.imageCardTop}
                      src={image104}
                      alt="Blog Content Image"
                    />
                    <CardBody>
                      <h4 className={classes.cardTitle}>
                        Lorem Ipsum is simply dummy
                      </h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </CardBody>
                  </Card>
                </Link>
              </GridItem>
              <GridItem xs={12} sm={6} md={12}>
                <Link to="/blog/item">
                  <Card className={classes.card}>
                    <img
                      style={{
                        height: "248px",
                        width: "100%",
                        display: "block"
                      }}
                      className={classes.imageCardTop}
                      src={image100}
                      alt="Blog Content Image"
                    />
                    <CardBody>
                      <h4 className={classes.cardTitle}>
                        Lorem Ipsum is simply dummy
                      </h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </CardBody>
                  </Card>
                </Link>
              </GridItem>
            </GridContainer>
          </GridItem>
          <GridItem
            xs={12}
            sm={12}
            md={4}
            style={{ paddingLeft: "0", paddingRight: "0" }}
          >
            <GridContainer>
              <GridItem xs={12} sm={6} md={12}>
                <Link to="/blog/item">
                  <Card className={classes.card}>
                    <img
                      style={{
                        height: "248px",
                        width: "100%",
                        display: "block"
                      }}
                      className={classes.imageCardTop}
                      src={image102}
                      alt="Blog Content Image"
                    />
                    <CardBody>
                      <h4 className={classes.cardTitle}>
                        Lorem Ipsum is simply dummy
                      </h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </CardBody>
                  </Card>
                </Link>
              </GridItem>
              <GridItem xs={12} sm={6} md={12}>
                <Link to="/blog/item">
                  <Card className={classes.card}>
                    <img
                      style={{
                        height: "248px",
                        width: "100%",
                        display: "block"
                      }}
                      className={classes.imageCardTop}
                      src={image104}
                      alt="Blog Content Image"
                    />
                    <CardBody>
                      <h4 className={classes.cardTitle}>
                        Lorem Ipsum is simply dummy
                      </h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </CardBody>
                  </Card>
                </Link>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
        <div className={classes.space50}>
          <Divider />
        </div>
      </section>

      <section>
        <GridContainer>
          <GridItem xsm={12} sm={12} md={12}>
            <h2>Story of Nature</h2>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Link to="/blog/item">
              <Card className={classes.card}>
                <img
                  style={{ height: "279px", width: "100%", display: "block" }}
                  className={classes.imageCardTop}
                  src={image1}
                  alt="Blog Content Image"
                />
                <CardBody>
                  <h4 className={classes.cardTitle}>
                    Lorem Ipsum is simply dummy
                  </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </CardBody>
              </Card>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Link to="/blog/item">
              <Card className={classes.card}>
                <img
                  style={{ height: "279px", width: "100%", display: "block" }}
                  className={classes.imageCardTop}
                  src={image2}
                  alt="Blog Content Image"
                />
                <CardBody>
                  <h4 className={classes.cardTitle}>
                    Lorem Ipsum is simply dummy
                  </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </CardBody>
              </Card>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Link to="/blog/item">
              <Card className={classes.card}>
                <img
                  style={{ height: "279px", width: "100%", display: "block" }}
                  className={classes.imageCardTop}
                  src={image3}
                  alt="Blog Content Image"
                />
                <CardBody>
                  <h4 className={classes.cardTitle}>
                    Lorem Ipsum is simply dummy
                  </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </CardBody>
              </Card>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Link to="/blog/item">
              <Card className={classes.card}>
                <img
                  style={{ height: "279px", width: "100%", display: "block" }}
                  className={classes.imageCardTop}
                  src={image4}
                  alt="Blog Content Image"
                />
                <CardBody>
                  <h4 className={classes.cardTitle}>
                    Lorem Ipsum is simply dummy
                  </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </CardBody>
              </Card>
            </Link>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
            <Link to="/blog/item">
              <Card className={classes.card}>
                <img
                  style={{ height: "279px", width: "100%", display: "block" }}
                  className={classes.imageCardTop}
                  src={image5}
                  alt="Blog Content Image"
                />
                <CardBody>
                  <h4 className={classes.cardTitle}>
                    Lorem Ipsum is simply dummy
                  </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </CardBody>
              </Card>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Link to="/blog/item">
              <Card className={classes.card}>
                <img
                  style={{ height: "279px", width: "100%", display: "block" }}
                  className={classes.imageCardTop}
                  src={image6}
                  alt="Blog Content Image"
                />
                <CardBody>
                  <h4 className={classes.cardTitle}>
                    Lorem Ipsum is simply dummy
                  </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </CardBody>
              </Card>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Link to="/blog/item">
              <Card className={classes.card}>
                <img
                  style={{ height: "279px", width: "100%", display: "block" }}
                  className={classes.imageCardTop}
                  src={image7}
                  alt="Blog Content Image"
                />
                <CardBody>
                  <h4 className={classes.cardTitle}>
                    Lorem Ipsum is simply dummy
                  </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </CardBody>
              </Card>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Link to="/blog/item">
              <Card className={classes.card}>
                <img
                  style={{ height: "279px", width: "100%", display: "block" }}
                  className={classes.imageCardTop}
                  src={image8}
                  alt="Blog Content Image"
                />
                <CardBody>
                  <h4 className={classes.cardTitle}>
                    Lorem Ipsum is simply dummy
                  </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </CardBody>
              </Card>
            </Link>
          </GridItem>
        </GridContainer>
        <div className={classes.space50}>
          <Divider />
        </div>
      </section>
      <section>
        <GridContainer>
          <GridItem xsm={12} sm={12} md={12}>
            <h2>Story of Light</h2>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Link to="/blog/item">
              <Card className={classes.card}>
                <img
                  style={{ height: "279px", width: "100%", display: "block" }}
                  className={classes.imageCardTop}
                  src={image101}
                  alt="Blog Content Image"
                />
                <CardBody>
                  <h4 className={classes.cardTitle}>
                    Lorem Ipsum is simply dummy
                  </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </CardBody>
              </Card>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Link to="/blog/item">
              <Card className={classes.card}>
                <img
                  style={{ height: "279px", width: "100%", display: "block" }}
                  className={classes.imageCardTop}
                  src={image106}
                  alt="Blog Content Image"
                />
                <CardBody>
                  <h4 className={classes.cardTitle}>
                    Lorem Ipsum is simply dummy
                  </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </CardBody>
              </Card>
            </Link>
          </GridItem>
        </GridContainer>
      </section>
    </Fragment>
  );
};

export default withStyles(styles)(blog);
