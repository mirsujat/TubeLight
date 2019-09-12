import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const PublishableKey = "pk_test_dnep0Wu9dcCcJI3RfDgTW4pN";
  let URL = "http://localhost:9000/.netlify/functions/api/payment";

  if (process.env.NODE_ENV !== "development") {
    URL = "https://crown-shop.netlify.com/.netlify/functions/api/payment";
  }

  const onToken = token => {
    axios({
      url: URL,
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => alert("Payment Successful!"))
      .catch(error => console.log("Payment Error: ", JSON.parse(error)));
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Shop Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={PublishableKey}
    ></StripeCheckout>
  );
};

export default StripeCheckoutButton;
