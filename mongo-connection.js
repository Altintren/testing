const mongoose = require('mongoose')

async function main() {
  await mongoose.connect('mongodb+srv://nodejs:a1b2c3d4e5@Cluster0.rm8pq.gcp.mongodb.net/barberapp?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true})
  console.log('MongoDB has connected!')
}

main()