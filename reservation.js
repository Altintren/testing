module.exports = reservation

Reservation = class {
    constructor(barber, customer, date, time) {
        this.barber = barber
        this.customer = customer
        this.date = Date
        this.time = time
        this.reservations = []
    }
    book(reservation){
        this.reserations.push(reservation)
        barber.reservation.push(this)
    }
}


