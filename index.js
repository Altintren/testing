const Customer = require("./models/customer")
const Reservation = require("./models/reservation")
const CustomerService = require("./services/customer-service.js")
const ReservationService = require("./services/reservation-service.js")
const express = require("express")
const Database = require("./database")
const bodyParser = require("body-parser")

const app = express()
app.listen(3000, () => {
    console.log("Server listening..")
})

app.set("view engine", "pug")
app.get("/", (req, res) => {
    req.
    res.render("index")
})

app.use(bodyParser.json())

const people = CustomerService.findAll()