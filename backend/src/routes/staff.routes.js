import { Router } from 'express'
import authAdmin from '../middlewares/adminAuth.middleware.js'
import {
  addStaffMember,
  deleteStaffMember,
  updateStaffMember,
} from '../controllers/staff.controller.js'

const router = Router()

// Admin operations
router.route('/add').post(authAdmin, addStaffMember)
router.route('/delete/:staffId').delete(authAdmin, deleteStaffMember)
router.route('/update/:staffId').put(authAdmin, updateStaffMember)

export default router
