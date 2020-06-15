const mongoose = require("mongoose");
const Card = mongoose.model("Cards", {
  _id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  image: {
    type: String,
  },
  title: {
    type: String,
  },
  oldPrice: {
    type: Number,
  },
  newPrice: {
    type: Number,
  },
  discount: {
    type: Number,
  },
  state: {
    type: String,
  },
});

const Outerwear = mongoose.model("Outerwear", {
  _id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  image: {
    type: String,
  },
  title: {
    type: String,
  },
  oldPrice: {
    type: Number,
  },
  newPrice: {
    type: Number,
  },
  discount: {
    type: Number,
  },
  state: {
    type: String,
  },
});

const TShirts = mongoose.model("TShirts", {
  _id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  image: {
    type: String,
  },
  title: {
    type: String,
  },
  oldPrice: {
    type: Number,
  },
  newPrice: {
    type: Number,
  },
  discount: {
    type: Number,
  },
  state: {
    type: String,
  },
});

const Dresses = mongoose.model("Dresses", {
  _id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  image: {
    type: String,
  },
  title: {
    type: String,
  },
  oldPrice: {
    type: Number,
  },
  newPrice: {
    type: Number,
  },
  discount: {
    type: Number,
  },
  state: {
    type: String,
  },
});

const Basket = mongoose.model("Basket", {
  _id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  image: {
    type: String,
  },
  title: {
    type: String,
  },
  oldPrice: {
    type: Number,
  },
  newPrice: {
    type: Number,
  },
  amount: {
    type: Number,
  },
  size: {
    type: String,
  },
  color: {
    type: String,
  },
});

module.exports = { Card, Basket, Outerwear, TShirts, Dresses };
