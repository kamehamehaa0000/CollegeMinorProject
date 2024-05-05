import Reservation from '../models/Reservation.model.js'
import asyncHandler from '../utlities/asyncHandler.js'
import apiResponse from '../utlities/apiResponse.js'
import errorHandler from '../utlities/errorHandler.js'

//add

const addReservation = asyncHandler(async (req, res) => {
  const { time, date, madeBy, phoneNumber } = req.body
  if (!time || !madeBy || !phoneNumber || !date) {
    throw new errorHandler(400, 'all fields required')
  }
  const restaurant = await Restaurant.findOne({})
  if (!restaurant) {
    throw new errorHandler(404, 'Restaurant not found')
  }
  if (restaurant.bookedSlots >= restaurant.totalSlots) {
    throw new errorHandler(400, 'No slots available for reservation')
  }

  const reservation = new Reservation.create({
    time,
    date,
    madeBy,
    phoneNumber,
  })
  if (!reservation) {
    throw new errorHandler(500, 'Reservation failed')
  }

  restaurant.bookedSlots++
  await restaurant.save()

  res
    .status(201)
    .json(new apiResponse(200, reservation, 'reservation made successfully'))
})

//delete

const deleteReservation = asyncHandler(async (req, res) => {
  const phoneNumber = req.params.phoneNumber
  if (!phoneNumber) {
    throw new errorHandler(400, 'Phone number is required')
  }

  const delReservation = await Reservation.findById(phoneNumber)
  if (!delReservation) {
    throw new errorHandler(400, 'reservation does not exist')
  }
  const restaurant = await Restaurant.findOne({})
  if (!restaurant) {
    throw new errorHandler(404, 'Restaurant not found to delete the record')
  }

  restaurant.bookedSlots--
  await restaurant.save()

  res
    .status(200)
    .json(
      new apiResponse(200, delReservation, 'reservation deleted successfully')
    )
})

//get all reservation by userID
const getAllReservationById = asyncHandler(async (req, res) => {
  const userId = req.params.userId
  if (!userId) {
    throw new errorHandler(400, 'user info is required')
  }
  reservations = await Reservation.find({ madeBy: userId })
  if (!reservations) {
    throw new errorHandler(400, 'no reservations found')
  }
  res
    .status(200)
    .json(
      new apiResponse(200, reservations, 'successfully listed reservations')
    )
})

//get all reservation
const getAllReservation = asyncHandler(async (req, res) => {
  reservations = await Reservation.find()
  if (!reservations) {
    throw new errorHandler(400, 'no reservations found')
  }
  res
    .status(200)
    .json(
      new apiResponse(200, reservations, 'successfully listed reservations')
    )
})

export {
  addReservation,
  deleteReservation,
  getAllReservationById,
  getAllReservation,
}
