const mongoose = require("mongoose")

const ReservationSchema = new mongoose.Schema({
    customer: {
        fullname: String,
        phonenumber: String
    },
    date: String,
    hour: Number
})

const ReservationModel = mongoose.model("Reservation", ReservationSchema)

module.exports = ReservationModel