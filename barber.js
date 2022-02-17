module.exports = barber

Barber = class {
    constructor(name, phonenumber, date, time) {
        this.name = name
        this.phonenumber = phonenumber
        this.date = Date
        this.time = time
        this.status = ["available","reserved"]
        this.reservations = []
    }
    book(reservation){
        this.reserations.push(reservation)
        barber.reservation.push(this)
    }
}


