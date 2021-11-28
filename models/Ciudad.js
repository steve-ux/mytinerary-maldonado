const mongoose = require('mongoose')

const ciudadSchema = new mongoose.Schema({
    city: {type: String, required: true},
    country: {type: String, required: true},
    image: {type: URL, required: true},
    zone:{type: String}
})

const Ciudad = mongoose.model('ciudad', ciudadSchema)
module.exports = Ciudad