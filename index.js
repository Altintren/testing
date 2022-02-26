const Customer = require("./customer")
const Reservation = require("./reservation")
const Database = require("./database")

const yasin = new Customer("Yasin Altıntren" , "05428326212")

Database.save("customer.json", yasin)
