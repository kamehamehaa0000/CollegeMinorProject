import mongoose from 'mongoose'
const cartSchema = new mongoose.Schema(
  {
    items: [
      {
        item: { type: mongoose.Schema.Types.ObjectId, ref: 'FoodItem' },
        qty: { type: number, min: [1, 'atleast one qty is required'] },
      },
    ],
    total: { type: Number, required: true },
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
) // Add timestamps

const Cart = mongoose.model('Cart', cartSchema)

export default Cart
