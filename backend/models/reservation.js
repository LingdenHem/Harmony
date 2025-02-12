import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema(
  {
    guestCount: {
      type: Number,
      required: true,
    },
    reservationDay: {
      type: String,
      required: true,
    },
    reservationTime: {
      type: String,
      required: true,
    },
  },
  {
    collection: "reservations",
  }
);

const Reservation = mongoose.model("Reservation", reservationSchema);

export default Reservation;
