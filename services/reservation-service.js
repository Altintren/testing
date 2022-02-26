const BaseService = require('./base-service')
const ReservationModel = require('../models/reservation')

class ReservationService extends BaseService {
    constructor() {
        super(ReservationModel, `${__dirname}/../reservation-database.json`)
    }
}

module.exports = new ReservationService()