const express = require('express');
const router = express.Router();

//Series Models
const NHLSeries = require('../../models/NHLSeries');
const NBASeries = require('../../models/NBASeries');
const MLBSeries = require('../../models/MLBSeries');
const NFLSeries = require('../../models/NFLSeries');

router.get('/nhl', (req, res) => {
    NHLSeries.find()
        .sort({ year: 1 })
        .then(series => res.json(series));
        //res.send("<h1>test</h1>")
});

router.get('/nba', (req, res) => {
    NBASeries.find()
        .sort({ year: 1 })
        .then(series => res.json(series));
        //res.send("<h1>test</h1>")
});

router.get('/nfl', (req, res) => {
    NFLSeries.find()
        .sort({ year: 1 })
        .then(series => res.json(series));
        //res.send("<h1>test</h1>")
});

router.get('/mlb', (req, res) => {
    MLBSeries.find()
        .sort({ year: 1 })
        .then(series => res.json(series));
        //res.send("<h1>test</h1>")
});

router.get('/nhl/:id', (req, res) => {
    NHLSeries.findById(req.params.id)
        .then(series => res.json(series))
        .catch(err => res.send(err));
        //res.send("<h1>test</h1>")
});
module.exports = router;