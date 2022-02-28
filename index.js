const Customer = require("./customer")
const Reservation = require("./reservation")
const Database = require("./database")

//Creating customers
const yasin = new Customer("Yasin Altıntren" , "05428326212")
const hakan = new Customer("Hakan Baykuşlar" , "05211111111")
const catay = new Customer("Çağatay Uçar" , "05422222222")

//Creating sample reservation
const res1 = new Reservation()

Database.save("customer.json", yasin, hakan, catay)
Database.save("")