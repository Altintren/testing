contract = class {
    constructor(season, year, currency, status) {
        this.season = ["SUM", "WIN"]
        this.year = year
        this.currency = ["EUR", "USD", "GBP"]
        this.status = ["Signed", "Waiting"]
        this.hotels = []
    }
}

// Yeni kontratları tanımlıyorum. N tane olabilir ama örnek için sadece 2 tane tanımlıyorum.
Contract1 = new contract(SUM, 2020, EUR, Waiting)
Contract2 = new contrant(WIN, 2020, USD, Waiting)