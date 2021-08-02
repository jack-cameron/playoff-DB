const express = require('express');
const router = express.Router();

// Team Model
const Team = require('../../models/Team');

// @route   GET api/teams
// @desc    get all teams
// @acccess Public
router.get('/', (req, res) => {
    Team.find()
      .sort({ name: 1 })
      .then(teams => res.json(teams));
});

module.exports = router;