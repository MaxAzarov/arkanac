const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const { Card, Basket, Outerwear, TShirts, Dresses } = require("./schema");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const { emailSendler, password } = require("./emailData");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
mongoose.connect(
  `mongodb+srv://max:Starwars123@cluster0-8vk0z.mongodb.net/arkana`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

app.post("/api/card", (req, res) => {
  const { id, category } = req.body;
  switch (category) {
    case "Outerwear":
      Outerwear.findById(id)
        .then((card) => {
          res.status(200).send(card);
        })
        .catch((e) => res.status(400).send(e));
      break;
    case "Blouses":
      Card.findById(id)
        .then((card) => {
          res.status(200).send(card);
        })
        .catch((e) => res.status(400).send(e));
      break;
    case "T-Shirts":
      TShirts.findById(id)
        .then((card) => {
          res.status(200).send(card);
        })
        .catch((e) => res.status(400).send(e));
      break;
    case "Dresses":
      Dresses.findById(id)
        .then((card) => {
          res.status(200).send(card);
        })
        .catch((e) => res.status(400).send(e));
      break;
  }
});

app.post("/api/basket", async (req, res) => {
  const { id, amount, size, color, category } = req.body;
  switch (category) {
    case "Outerwear":
      Outerwear.findById({ _id: id }).then((card) => {
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
      break;
    case "Blouses":
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
      break;
    case "T-Shirts":
      TShirts.findById({ _id: id }).then((card) => {
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
      break;
    case "Dresses":
      Dresses.findById({ _id: id }).then((card) => {
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
      break;
  }
  // try {

  //   Card.findById({ _id: id }).then((card) => {
  //     const { image, title, oldPrice, newPrice } = card;
  //     const basketCard = new Basket({
  //       _id: id,
  //       image,
  //       title,
  //       oldPrice,
  //       newPrice,
  //       amount: amount,
  //       size: size,
  //       color: color,
  //     });
  //     basketCard.save();
  //     res.status(201).send(basketCard);
  //   });
  // } catch (e) {
  //   res.status(404).send(e);
  // }
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

app.post("/api/blouses/price", async (req, res) => {
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

app.post("/api/outerwear/price", async (req, res) => {
  const { filtration } = req.body;
  try {
    switch (filtration) {
      case "Price,high to low":
        Outerwear.find({})
          .sort("-newPrice")
          .then((cards) => res.status(200).send(cards));
        break;
      case "Price,low to high":
        Outerwear.find({})
          .sort("newPrice")
          .then((cards) => res.status(200).send(cards));
        break;
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

app.post("/api/T-Shirts/price", async (req, res) => {
  const { filtration } = req.body;
  try {
    switch (filtration) {
      case "Price,high to low":
        TShirts.find({})
          .sort("-newPrice")
          .then((cards) => res.status(200).send(cards));
        break;
      case "Price,low to high":
        TShirts.find({})
          .sort("newPrice")
          .then((cards) => res.status(200).send(cards));
        break;
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

app.post("/api/Dresses/price", async (req, res) => {
  const { filtration } = req.body;
  try {
    switch (filtration) {
      case "Price,high to low":
        Dresses.find({})
          .sort("-newPrice")
          .then((cards) => res.status(200).send(cards));
        break;
      case "Price,low to high":
        Dresses.find({})
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
        Card.find({
          newPrice: { $gt: 0, $lt: 80 },
        }).then((cards) => res.status(200).send(cards));
        break;
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

app.post("/api/email", async (req, res) => {
  const { email } = req.body;
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailSendler,
        pass: password,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    let mailOption = {
      from: emailSendler,
      to: `${email}`,
      subject: "You subscribe!",
      text: "You subscribe!",
    };

    await transporter.sendMail(mailOption, (err, data) => {
      if (err) {
        console.log("Errors", err);
      } else {
        console.log("Email was sended!");
      }
    });
    res.status(200).send({ status: "ok" });
  } catch (e) {
    console.log(e);
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("the server is running!");
});
