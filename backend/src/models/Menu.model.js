import mongoose from 'mongoose'

const menuSchema = new mongoose.Schema(
  {
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FoodItem' }],
    date: { type: string },
  },
  { timestamps: true }
)

const Menu = mongoose.model('Menu', menuSchema)

export default Menu
/*
  item delete
  item add
*/
