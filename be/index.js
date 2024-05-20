const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const { Shema } = mongoose;
const app = express();
const port = 3000;
const DataBase = "mongodb+srv://meryem:meryem@cluster0.lbuxvjt.mongodb.net/";


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const flowerSchema = new mongoose.Schema({
  img: String,
  name: String,
  price: Number,
});
const Flower = mongoose.model("Flower", flowerSchema);

app.get("/", async (req, res) => {
  try {
    let data = await Flower.find();
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});
app.get("/:id", async (req, res) => {
  try {
    let data = await Flower.findById(req.params.id);
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});
app.post("/", async (req, res) => {
  try {
    let data = new Flower(req.body);
    await data.save();
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});
app.delete("/:id", async (req, res) => {
  try {
    let data = await Flower.findByIdAndDelete(req.params.id);
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

mongoose
  .connect(DataBase)
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
