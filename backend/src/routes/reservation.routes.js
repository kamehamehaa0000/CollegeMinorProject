import Reservation from '../models/Reservation.model.js'
import authUser from '../middlewares/auth.middleware.js'
import authAdmin from '../middlewares/adminAuth.middleware.js'
import { Router } from 'express'
import {
  addReservation,
  getAllReservation,
  getAllReservationById,
} from '../controllers/reservation.controller.js'

const router = Router()

//user operations
Router.route('reservation/add').post(authUser, addReservation)
Router.route('reservation/delete/:phoneNumber').delete(authUser, addReservation)
Router.route('reservation/list/:userId').get(authUser, getAllReservationById)

//admin operations
Router.route('reservation/showall').get(authAdmin, getAllReservation)

export default router
