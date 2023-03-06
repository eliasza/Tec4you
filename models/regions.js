import mongoose from 'mongoose'

const regionsSchema = new mongoose.Schema({
  iso: String,
  name: String
})

module.exports = mongoose.models.regions || mongoose.model('regions', regionsSchema)