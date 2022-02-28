module.exports = class Customer {
    constructor(fullname, phonenumber, reservations = [], id) {
        this.fullname = fullname
        this.phonenumber = phonenumber
        this.reservations = reservations
        this.id = id
    }

    book(reservation){
        this.reservations.push(reservation)
        reservation.reservations.push(this)
    }
    
    static create({ fullname, phonenumber, reservations, id }) {
        return new Customer(fullname , phonenumber, reservations, id)
    }
}