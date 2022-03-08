const mongoose = require("mongoose")

const ReservationSchema = new mongoose.Schema({
    customer: String,
    date: String    
})

const ReservationModel = mongoose.model("Reservation", ReservationSchema)

module.exports = ReservationModel