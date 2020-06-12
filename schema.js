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
  OldPrice: {
    type: String,
  },
  NewPrice: {
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
  OldPrice: {
    type: Number,
  },
  NewPrice: {
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
module.exports = { Card, Basket };
