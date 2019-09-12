const serverless = require("serverless-http");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "development") {
  router.get("*", function(req, res) {
    res.status(404).send("Sorry, we cannot find anything!");
  });

  router.post("/payment", (req, res) => {
    const body = {
      source: req.body.token.id,
      amount: req.body.amount,
      currency: "usd"
    };
    stripe.charges.create(body, (stripeError, stripeRes) => {
      if (stripeError) {
        res.status(500).send({ error: stripeError });
      } else {
        res.status(200).send({ success: stripeRes });
      }
    });
  });
}

if (process.env.NODE_ENV === "production") {
  router.get("*", function(req, res) {
    res.status(404).send("Sorry, we cannot find anything!");
  });
  router.post("/payment", (req, res) => {
    const body = {
      source: req.body.token.id,
      amount: req.body.amount,
      currency: "usd"
    };
    stripe.charges.create(body, (stripeError, stripeRes) => {
      if (stripeError) {
        res.status(500).send({ error: stripeError });
      } else {
        res.status(200).send({ success: stripeRes });
      }
    });
  });
}

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
