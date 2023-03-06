import mongoose from 'mongoose'

const reportsSchema = new mongoose.Schema({
    date:String,
    confirmed:Number,
    deaths:Number,
    recovered:Number,
    confirmed_diff:Number,
    deaths_diff:Number,
    recovered_diff:Number,
    last_update:String,
    active:Number,
    active_diff:Number,
    fatality_rate:Number,
    region:{
        iso: String,
        name:String,
        province:String,
        lat:String,
        long:String,
        cities:[{
            name:String,
            date:String,
            fips:Number,
            lat:String,
            long:String,
            confirmed:Number,
            deaths:Number,
            confirmed_diff:Number,
            deaths_diff:Number,
            last_update:String
        }]
    }
})

module.exports = mongoose.models.reports || mongoose.model('reports', reportsSchema)