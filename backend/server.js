import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

const app = express();

app.get("/", (req, res) => {
  res.send("server is ready");
});

const result = dotenv.config();
if (result.error) {
  console.error("Error loading .env file", result.error);
}

console.log(process.env.MONGO_URI);
app.listen(5000, () => {
  connectDB();
  console.log("Server started att 5000 hello");
});
