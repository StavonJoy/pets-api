const mongoose = require('mongoose')
const Schema = mongoose.Schema

const petSchema = new Schema({
  name: String,
  species: String,
  breed: String,
  age: Number,
  owner: String,
  vaccinated: Boolean
}, {
  timestamps: true
})

module.exports = mongoose.model('Pet', petSchema)