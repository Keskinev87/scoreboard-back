const mongoose = require('mongoose')

let playerSchema = new mongoose.Schema({
    name: {type: String, required: true},
    country: {type: String, required: true},
    registrationDate: {type: Date, required: true},
    score: {type: Number, required: true},
    level: {type: Number, required: true},
    dateInMiliSeconds: {type: Number, required: true}
})

let Player = mongoose.model('Player', playerSchema)
module.exports = Player