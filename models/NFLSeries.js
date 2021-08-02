const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Series Schema
const NFLSeriesSchema = new Schema({
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
}, { collection: 'nfl' });

module.exports = NFLSeries = mongoose.model('NFLSeries', NFLSeriesSchema)