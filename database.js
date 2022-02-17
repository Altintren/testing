const fs = require("fs")

const save = function(filename, data) {
    fs.writeFileSync(filename, JSON.stringify(data))
    console.log(data)
}

module.exports = { save }

const load = function(filename, data) {
    return JSON.parse.fs.readFileSync(filename, "utf8")
    console.log(data)
}
