const express = require('express')
const router = express.Router()

const CustomerService = require('../services/customer-service')
const ReservationService = require('../services/reservation-service')

router.get('/all', async (req, res) => {
  const people = await CustomerService.findAll()
  res.render('list', { items: people })
})

router.get('/:id', async (req, res) => {
  const user = await CustomerService.find(req.params.id)
  res.render('data', { data: user })
})

router.post('/', async (req, res) => {
  const user = await CustomerService.add(req.body)
  res.send(user)
})

router.delete('/:id', async (req, res) => {
  const user = await CustomerService.del(req.params.id)
  res.send(user)
})

router.post('/:id/reservations', async (req, res) => {
  const user = await CustomerService.find(req.params.id)
  const reservation = await ReservationService.find(req.body.reservation)
  await CustomerService.book(user, reservation)

  res.send(user)
})

router.get('/:id/peers-over-18', async (req, res) => {
  const user = await CustomerService.find(req.params.id)
  const peers = await user.findPeersOver18()
  res.send(peers)
})

module.exports = router