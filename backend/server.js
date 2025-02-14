import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";
import Dine from "./models/dine.js";
import Cocktails from "./models/cocktails.js";
import Reservation from "./models/reservation.js";
import cors from "cors";

dotenv.config();
const app = express();

connectDB();

app.use(
  cors({
    origin: "https://harmony-frontend.onrender.com",
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Backend");
});

app.get("/api/dine", async (req, res) => {
  try {
    const dineItems = await Dine.find({});
    res.status(200).json({ data: dineItems });
  } catch (error) {
    console.log("error in fetching the dineItems", error.message);
    res.status(500).json({ sucess: false, message: "Server error" });
  }
});

app.post("/api/dine", async (req, res) => {
  const dine = req.body;

  if (!dine.name || !dine.ingredients || !dine.price) {
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

app.delete("/api/dine/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const dine = await Dine.findById(id);

    if (!dine) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    await Dine.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Deleted successfully",
      data: dine,
    });
  } catch (error) {
    console.log("Error in deleting dineItems:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

app.get("/api/cocktails", async (req, res) => {
  try {
    const cocktailItems = await Cocktails.find({});

    res.status(201).json({ success: true, data: cocktailItems });
  } catch (error) {
    console.log("Error fetching cocktails", error.message);
    res.status(500).json({ sucess: false, message: "server error" });
  }
});

app.post("/api/cocktails", async (req, res) => {
  const cocktails = req.body;

  if (!cocktails.name || !cocktails.ingredients || !cocktails.price) {
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

app.delete("/api/cocktails/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const cocktail = await Cocktails.findById(id);

    if (!cocktail) {
      return res.status(404).json({
        success: false,
        message: "Cocktail not found",
      });
    }

    await Cocktails.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Deleted successfully",
      data: cocktail,
    });
  } catch (error) {
    console.log("Error in deleting cocktail:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

app.post("/api/reservation", async (req, res) => {
  const { guestCount, reservationDay, reservationTime } = req.body;

  try {
    const newReservation = new Reservation({
      guestCount,
      reservationDay,
      reservationTime,
    });

    await newReservation.save();

    res.status(201).json(newReservation);
  } catch (err) {
    res.status(400).json({ error: "Error creating reservation" });
  }
});

app.get("/api/unavailable-times/:day", async (req, res) => {
  const { day } = req.params;

  try {
    const reservations = await Reservation.find(
      { reservationDay: day },
      "reservationTime"
    );

    // Extract reserved times
    const reservedTimes = reservations.map((res) => res.reservationTime);

    res.json(reservedTimes);
  } catch (err) {
    console.error("Error fetching unavailable times:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(5000, () => {
  console.log("Server started at 5000 hello");
});
