const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Series Schema
const NHLSeriesSchema = new Schema({
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
}, { collection: 'nhl' });

module.exports = NHLSeries = mongoose.model('NHLSeries', NHLSeriesSchema)