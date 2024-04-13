import { Router } from 'express'
import uploadMulter from '../middlewares/multer.middleware.js'
import { loginUser, registerUser } from '../controllers/user.controller.js'
import authUser from '../middlewares/auth.middleware.js'
const router = Router()

router
  .route('/register')
  .post(
    uploadMulter.fields([{ name: 'profileImage', maxCount: 1 }]),
    registerUser
  )

router.route('/login').post(loginUser)

//secured routes will go here
//...
//exporting router
export default router
