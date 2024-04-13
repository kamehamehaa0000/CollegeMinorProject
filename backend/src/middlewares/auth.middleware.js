import User from '../models/User.model'
import asyncHandler from '../utlities/asyncHandler'
import errorHandler from '../utlities/errorHandler'

const verifyJWT = asyncHandler(async (req, res, next) => {
  const token = req.body || req.header('Authorization')?.replace('Bearer ', '')
  console.log(token)
  if (!token) {
    throw new errorHandler(401, 'Unauthorised Request')
  }
  const decodedToken = jwr.verify(token, process.env.ACCESS_TOKEN_SECRET)
  const user = await User.findById(decodedToken._id).select('-password')
  if (!user) {
    throw new errorHandler(401, 'Invalid Access Token')
  }
  req.user = user
  next()
})

export default verifyJWT
