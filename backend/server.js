import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { connectDB } from "./config/db.js";
import Dine from "./models/dine.js";
import Cocktails from "./models/cocktails.js";

const app = express();
connectDB();
app.use(express.json());

app.get("/api/dine", async (req, res) => {
  try {
    const dineItems = await Dine.find({});
    res.status(200).json({ sucess: true, data: dineItems });
  } catch (error) {
    console.log("error in fetching the dineItems", error.message);
    res.status(500).json({ sucess: false, message: "Server error" });
  }
});

app.delete("/api/dine/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Dine.findByIdAndDelete(id);
    res.status(200).json({ sucess: true, message: "deleted sucessfully" });
  } catch (error) {
    console.log("error in deleting dineItems", error.message);
    res.status(404).json({ sucess: false, message: "Product not found" });
  }
});

app.post("/api/dine", async (req, res) => {
  const dine = req.body;

  if (!dine.name || !dine.price || !dine.image) {
    res.status(400).json({
      sucess: false,
      message: "please provide all the required fields",
    });
  }

  const newDineItems = new Dine(dine);

  try {
    await newDineItems.save();
    res.status(201).json({ sucess: true, data: newDineItems });
  } catch (error) {
    console.error("error in creation of product", error.message);
    res.status({ sucess: true, message: "server error" });
  }
});

app.post("/api/cocktails", async (req, res) => {
  const cocktails = req.body;

  if (!cocktails.name || !cocktails.price || !cocktails.image) {
    res.status(400).json({
      sucess: false,
      message: "please provide all the required fields",
    });
  }
  const newCocktailsItems = new Cocktails(cocktails);

  try {
    await newCocktailsItems.save();
    res.status(201).json({ sucess: true, data: newCocktailsItems });
  } catch (error) {
    console.error("error in creation of product", error.message);
    res.status({ sucess: true, message: "server error" });
  }
});

app.get("/api/cocktails", async (req, res) => {
  try {
    const cocktailItems = await Cocktails.find({});
    res.status(201).json({ sucess: true, data: cocktailItems });
  } catch (error) {
    console.log("Error fetching cocktails", error.message);
    res.status(500).json({ sucess: false, message: "server error" });
  }
});

const result = dotenv.config();
if (result.error) {
  console.error("Error loading .env file", result.error);
}

app.listen(5000, () => {
  console.log("Server started att 5000 hello");
});
