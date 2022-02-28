module.exports = class Reservation {
    constructor(customer, date, reservations = [], id) {
        this.customer = customer
        this.date = Date()
        this.reservations = reservations
        this.id = this.id
    }
    static create({ customer, date, reservations, id }) {
        return new reservation(customer, date, reservations, id)
    }
    printReservations(){
    this.reservations.forEach(printDetails)
    }
    printDetails = customer => console.log(fullname, phonenumber, id)
    
    report(){
        console.log((this.id), 'reservation is held at', (this.date), 'and number of reservations are', (this.reservations.length))
    }
}
