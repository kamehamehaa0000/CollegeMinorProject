import { Router } from 'express'
import { loginAdmin, registerAdmin } from '../controllers/admin.controller.js'
import authAdmin from '../middlewares/adminAuth.middleware.js'
const router = Router()

router.route('admin/register').post(registerAdmin)
router.route('admin/login').post(loginAdmin)

//secured routes will go here
//...
//exporting router
export default router
