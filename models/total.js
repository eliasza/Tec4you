import mongoose from 'mongoose'

const totalSchema = new mongoose.Schema({
    date: String,
    last_update:String,
    confirmed: Number,
    confirmed_diff: Number,
    deaths:Number,
    deaths_diff:Number,
    recovered:Number,
    recovered_diff:Number,
    active:Number,
    active_diff:Number,
    fatality_rate:Decimal128
})

module.exports = mongoose.models.total || mongoose.model('total', totalSchema)