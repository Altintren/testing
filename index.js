const Barber = require("./barber")
const Customer = require("./customer")
const Reservation = require("./reservation")
const Database = require("./database")

const yasin = new Customer("Yasin Altıntren" , "05428326212")
const tamer = new Barber("Tamer Hairdresser", "05368946570")

Database.save("customer.json", yasin)
Database.save("barber.json", tamer)
