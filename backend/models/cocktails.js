import mongoose from "mongoose";

const cocktailsSchema = new mongoose.Schema({
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
});

const Cocktails = mongoose.model("Cocktails", cocktailsSchema);
export default Cocktails;
