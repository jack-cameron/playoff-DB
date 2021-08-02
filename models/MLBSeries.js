const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Series Schema
const MLBSeriesSchema = new Schema({
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
}, { collection: 'mlb' });

module.exports = MLBSeries = mongoose.model('MLBSeries', MLBSeriesSchema)