const mongoose = require('mongoose');

const ciudadSchema = new mongoose.Schema({
    city: {type: String, required: true},
    country: {type: String, required: true},
    image: {type: String, required: true},
})

const Ciudad = mongoose.model('ciudad', ciudadSchema)

module.exports = Ciudad;