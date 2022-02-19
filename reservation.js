module.exports = class Reservation {
    constructor(barber, customer, date, time) {
        this.uid = this.uid
        this.barber = barber
        this.customer = customer
        this.date = Date
        this.time = time
        this.reservations = []
    }
    book(reservation){
        this.reservations.push(reservation)
        barber.reservation.push(this)
    }
    static create({ barber, customer, Date, time, reservations }) {
        return new reservation(barber, customer, Date, time, reservations)
    }
    printReservations(){
    this.reservations.forEach(printDetails)
    }
    printDetails = customer => console.log(fullname, phonenumber)
    }