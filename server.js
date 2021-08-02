const express = require('express');
const mongoose = require('mongoose');

const teams = require('./routes/api/teams');
const series = require('./routes/api/series');

const app = express();
app.use(express.json());


// DB Config

const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('Mongo DB connected...'))
    .catch(err => console.log(err));

// use routes
app.use('/api/teams', teams);

app.use('/api/series', series);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));