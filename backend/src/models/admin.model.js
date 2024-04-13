import mongoose from 'mongoose'
const adminSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true, required: true, lowercase: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
)
adminSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next()
  }
  this.password = await bcrypt.hash(this.password, 10)
  next()
})
const Admin = mongoose.model('Admin', userSchema)
adminSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password)
}
export default Admin
