import mongoose from 'mongoose'

// Define Schema for Reservation
const reservationSchema = new mongoose.Schema(
  {
    time: { type: String, required: true },
    date: { type: String, required: true },
    madeBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    phoneNumber: {
      type: Number,
    },
  },
  { timestamps: true }
)

const Reservation = mongoose.model('Reservation', reservationSchema)

export default Reservation
