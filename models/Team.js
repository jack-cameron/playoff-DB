const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schemsa
const TeamSchema = new Schema({
    name: {
        type: String,
        default: true
    },
    league: {
        type: String,
        default: true
    },
    conference: {
        type: String,
        default: true
    },
    division: {
        type: String,
        default: true
    }

});

module.exports = Team = mongoose.model('Team', TeamSchema)