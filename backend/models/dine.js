import mongoose from "mongoose";

const dineSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { collection: "dine" }
);

const Dine = mongoose.model("Dine", dineSchema);

export default Dine;
