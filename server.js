const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { Card, Basket } = require("./schema");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
mongoose.connect(
  "mongodb+srv://max:Starwars123@cluster0-8vk0z.mongodb.net/arkana",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

app.get("/api/cards", (req, res) => {
  Card.find({})
    .then((card) => {
      res.status(200).send(card);
    })
    .catch((e) => res.status(400).send(e));
});

app.post("/api/card", (req, res) => {
  const { id } = req.body;
  Card.findById(id)
    .then((card) => {
      res.status(200).send(card);
    })
    .catch((e) => res.status(400).send(e));
});

app.post("/api/basket", async (req, res) => {
  const { id, amount, size, color } = req.body;
  try {
    Card.findById({ _id: id }).then((card) => {
      const { image, title, oldPrice, newPrice } = card;
      const basketCard = new Basket({
        _id: id,
        image,
        title,
        oldPrice,
        newPrice,
        amount: amount,
        size: size,
        color: color,
      });
      basketCard.save();
      res.status(201).send(basketCard);
    });
  } catch (e) {
    res.status(404).send(e);
  }
});

app.get("/api/basket", async (req, res) => {
  try {
    Basket.find({}).then((cards) => res.status(200).send(cards));
  } catch (e) {
    res.status(404).send(e);
  }
});

app.delete("/api/basket/card", async (req, res) => {
  const { id } = req.body;
  try {
    Basket.findByIdAndDelete({ _id: id }).then((result) => {
      res.status(204).send(result);
    });
  } catch (e) {
    res.status(400).send(e);
  }
});

app.post("/api/price", async (req, res) => {
  const { filtration } = req.body;
  try {
    switch (filtration) {
      case "Price,high to low":
        Card.find({})
          .sort("-newPrice")
          .then((cards) => res.status(200).send(cards));
        break;
      case "Price,low to high":
        Card.find({})
          .sort("newPrice")
          .then((cards) => res.status(200).send(cards));
        break;
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

app.post("/api/trending", async (req, res) => {
  const { filtration } = req.body;
  console.log(filtration);
  try {
    switch (filtration) {
      case "New products":
        Card.find({
          state: "new",
        }).then((cards) => res.status(200).send(cards));
        break;
      case "Prices drop":
        Card.find({
          discount: { $lt: 0 },
        }).then((cards) => res.status(200).send(cards));
        break;
      case "Best sales":
        console.log("best sales");
        Card.find({
          newPrice: { $gt: 0, $lt: 80 },
        }).then((cards) => res.status(200).send(cards));
        break;
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("the server is running!");
});
