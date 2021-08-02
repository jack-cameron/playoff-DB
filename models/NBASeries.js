const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Series Schema
const NBASeriesSchema = new Schema({
        "year": {
          "type": "String"
        },
        "champion": {
          "type": "String"
        },
        "series": {
          "type": [
            "Mixed"
          ]
        }
}, { collection: 'nba' });

module.exports = NBASeries = mongoose.model('NBASeries', NBASeriesSchema)