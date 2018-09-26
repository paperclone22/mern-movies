const Express = require('express');
const Mongoose = require('mongoose');
const BodyParser = require('body-parser');
const db = require('./config/database');
const movies = require('./routes/movies');
const Cors = require('cors');

const app = Express();

// Middleware
app.use(BodyParser.json());

app.use(Cors({origin: true}));

Mongoose.connect(db.database, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.use('/movies', movies);

app.get('/', (req, res) => {
    res.redirect('/movies/');
})


const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
