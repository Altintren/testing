module.exports = class Reservation {
    constructor(customer, date, reservations = [], id) {
        this.customer = customer
        this.date = date
        this.reservations = reservations
        this.id = id
    }

    static create({customer, date, reservations, id}) {
        return new Reservation(customer, date, reservations, id)
    }

    printReservations() {
        //this.reservations.forEach(printDetails)
    }


    report() {
        console.log((this.id), 'reservation is held at', (this.date), 'and number of reservations are', (this.reservations.length))
    }
}
