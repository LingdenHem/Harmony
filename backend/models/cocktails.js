import mongoose from "mongoose";

const cocktailsSchema = new mongoose.Schema({
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
});

const Cocktails = mongoose.model("Cocktails", cocktailsSchema);
export default Cocktails;
