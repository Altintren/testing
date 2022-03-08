const BaseService = require('./base-service')
const CustomerModel = require('../models/customer')

class CustomerService extends BaseService {
    model = CustomerModel

    async book(customer,date) {
        customer.reservations.push(customer)
        await this.save()    
    }
}

module.exports = new CustomerService()