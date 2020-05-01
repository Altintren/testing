hotel = class {
    constructor(uid, name, destination, country) {
        this.uid = uid
        this.name = name
        this.star = star
        this.destination = ["AYT","BLK","SID","ALY","KMR"]
        this.country = Turkey
        this.contracts = []
    }
    sign(contract){
        this.contracts.push(contract)
        contract.hotels.push(this)
    }
}

contract = class {
    constructor(season, year, currency, status) {
        this.season = ["SUM", "WIN"]
        this.year = year
        this.currency = ["EUR", "USD", "GBP"]
        this.status = ["Signed", "Waiting"]
        this.hotels = []
    }
}

// Yeni otelleri ve propertylerini tanımlıyorum. N tane olabilir ama örnek için sadece 2 tane tanımlıyorum.
Falcon = new hotel(1, 4, AYT, Turkey)
Laguna = new hotel(2, 3, AYT, Turkey)
// Yeni kontratları tanımlıyorum. N tane olabilir ama örnek için sadece 2 tane tanımlıyorum.
Contract1 = new contract(SUM, 2020, EUR, Waiting)
Contract2 = new contrant(WIN, 2020, USD, Waiting)

Falcon.sign(Contract1)
Laguna.sign(Contract2)