module.exports = class Customer {
    constructor(fullname, phonenumber) {
        this.fullname = fullname
        this.phonenumber = phonenumber
        this.reservations = []
    }

    book(reservation){
        this.reservations.push(reservation)
        reservations.reservations.push(this)
    }
    
    static create({ fullname, phonenumber, reservations }) {
        return new Customer(fullname , phonenumber, reservations)
    }
}