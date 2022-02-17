module.exports = customer

Customer = class {
    constructor(fullname, phonenumber) {
        this.name = fullname
        this.phonenumber = phonenumber
        this.reservations = []
    }
    book(reservation){
        this.reservations.push(reservation)
        barber.reservation.push(this)
    }
}


