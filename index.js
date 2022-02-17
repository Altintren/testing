const Barber = require("/barber")
const Customer = require("/custormer")
const Chalk = require(Chalk)
const Database = require("/database")

class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
    }
    greet(person) {
      console.log("Hello " + person.name, "my name is ", this.name)
    }
    attend(meetup) {
      this.meetup = meetup
      meetup.attendees.push(this)
    }
  }

  class Meetup {
    constructor(name) {
      this.name = name
      this.attendees = []
    }
    printAttendeeNames() {
      this.attendees.forEach(printName)
    }
  }

  printReservation = reservation => console.log(reservation.fullname)

