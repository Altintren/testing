const Customer = require("./models/customer")
const Reservation = require("./models/reservation")
const BaseService = require("./services/base-service.js")
const CustomerService = require("./services/customer-service.js")
const ReservationService = require("./services/reservation-service.js")
const express = require("express")
const Database = require("./database")

const app = express()
app.listen(3000, () => {
    console.log("Server listening")
})

console.log("Are you ready?")

async function main() { 
//Creating customers
const yasin = new Customer("Yasin Altıntren" , "05428326212")
const catay = new Customer("Çağatay Uçar", "05451111111")
const hakan = new Customer("Hakan Baykuşlar", "05452222222")

//Creating dummy reservation
const res1 = new Reservation(123, yasin, date(2022, 10, 22, 09), res1.uid)

//customer yasin added to res1
yasin.book(res1)
res1.report()

await CustomerService.add(yasin)
await CustomerService.add(hakan)
await CustomerService.add(catay)

const people = await CustomerService.findAll()

console.log(people[0].fullname)
}