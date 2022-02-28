const fs = require('fs')

const save = function(filename, data, err) {
  fs.writeFile(filename, JSON.stringify(data), (err) => {
    console.log("There is a write error", err)
  })
}

const load = function(filename, handler) {
  fs.readFile(filename, 'utf8', (err, file) => {
    if (err) {
      console.log('There is a read error', err)
      handler(err);
      return
    }
    else {
      handler(null, JSON.parse(file));
    }
  })
}

module.exports = { save, load }