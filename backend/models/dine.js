import mongoose from "mongoose";

const dineSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    ingredients: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
  { collection: "dine" }
);

const Dine = mongoose.model("Dine", dineSchema);

export default Dine;
