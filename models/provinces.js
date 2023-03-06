import mongoose from 'mongoose'

const provincesSchema = new mongoose.Schema({
  iso: String,
  name: String,
  province: String,
  lat: String,
  long: String
})

module.exports = mongoose.models.provinces || mongoose.model('provinces', provincesSchema)