const express = require('express')
const router = express.Router()

const ReservationService = require('../services/reservation-service')
const CustomerService = require('../services/customer-service')

router.get('/all', async (req, res) => {
  const reservations = await ReservationService.findAll()
  res.render('list', { items: reservations })
})

router.get('/all/json', async (req, res) => {
  const reservations = await ReservationService.findAll()
  res.send(reservations)
})

//This method will find all reservations by date
router.get('/:date', async (req, res) => {
  const reservations = await ReservationService.find(req.params.date)
  res.render('list', { items: reservations })
})

router.get('/:id', async (req, res) => {
  const reservation = await ReservationService.find(req.params.id)
  res.render('data', { data: reservation })
})

// This method will create a reservation with customer.id
// Customer will select date&time and book a reservation.
router.post('/', async (req, res) => {
  const reservation = await ReservationService.add(req.body)
  res.send(reservation)
})

router.delete('/:id', async (req, res) => {
  const reservation = await ReservationService.del(req.params.id)
  res.send(reservation)
})

module.exports = router