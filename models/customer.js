const mongoose = require("mongoose")

const CustomerSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        minlength: 2
    },
    phonenumber: {
        type: Number,
        required: true,
        maxlength: 11 
    },
    reservations: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Reservation",
        autopopulate: true
    }]
})

CustomerSchema.plugin(require("mongoose-autopopulate"))

const CustomerModel = mongoose.model("Customer", CustomerSchema)

module.exports = CustomerModel