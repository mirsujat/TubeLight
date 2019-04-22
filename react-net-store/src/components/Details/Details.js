import React, { Component } from "react";
import { ProductConsumer } from "../context/context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../StyledComponent/Button/Button";

class Details extends Component {
  state = {};
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            price,
            title,
            info,
            inCart
          } = value.detailProduct;
          return (
            <div className="cantainer py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end of title */}

              {/* product */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} alt="product" className="img-fluid" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  {/* product text */}
                  <h2>model: {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by: <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price: <span>$</span> {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about product:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* buttons */}
                  <div>
                    <Link to="/">
                      <ButtonContainer>back to products page</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      disabled={inCart ? true : false}
                      onClick={() => value.addToCart(id)}
                    >
                      {inCart ? "inCart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                  {/* end product text */}
                </div>
              </div>
              {/* end of product */}
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
