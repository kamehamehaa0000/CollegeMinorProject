import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema(
  {
    cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cart' }],
    totalPrice: { type: Number, required: true },
    estTime: { type: String, required: true },
    orderBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
)

const Order = mongoose.model('Order', orderSchema)

export default Order
