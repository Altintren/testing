const Customer = require("./models/customer")
const Reservation = require("./models/reservation")
const CustomerService = require("./services/customer-service.js")
const ReservationService = require("./services/reservation-service.js")
const express = require("express")
const Database = require("./database")

const app = express()
app.listen(3000, () => {
    console.log("Server listening")
})
app.set("view engine", "pug")
app.get("/", (req, res) => {
    res.render("index")
})

console.log("Are you ready?")

async function main() { 
//Creating customers
const yasin = new Customer("Yasin Altıntren" , "05428326212")
const catay = new Customer("Çağatay Uçar", "05451111111")
const hakan = new Customer("Hakan Baykuşlar", "05452222222")

//Creating dummy reservation
const res1 = new Reservation(yasin, Date(2021, 10, 22, 11))

res1.report()

await CustomerService.add(yasin)
await CustomerService.add(hakan)
await CustomerService.add(catay)
await ReservationService.add(res1)

const people = await CustomerService.findAll()

console.log(people[0].fullname)
}
 main()