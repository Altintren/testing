const express = require("express")
const bodyParser = require("body-parser")
const customerRouter = require('./routes/customer')
const cors = require("cors")
const reservationRouter = require('./routes/reservation')

require('./mongo-connection')

const app = express()
app.listen(3000, () => {
    console.log("Server listening..")
})
app.use(cors())
app.use(bodyParser.json())
app.set("view engine", "pug")
app.get("/", (req, res) => {
    req.
    res.render("index")
})

app.use('/customer', customerRouter)
app.use('/reservation', reservationRouter)

