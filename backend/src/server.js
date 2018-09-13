const Express = require('express');
const Mongoose = require('mongoose');
const BodyParser = require('body-parser');
const db = require('./config/database').mongoURI;

const app = Express();

// Middleware
app.use(BodyParser.json());

Mongoose.connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
