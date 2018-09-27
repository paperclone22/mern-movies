const Express = require('express');
const Mongoose = require('mongoose');
const BodyParser = require('body-parser');
const db = require('./config/database');
const movies = require('./routes/movies');
const Cors = require('cors');
const Path = require('path');

const app = Express();

// Middleware
app.use(BodyParser.json());

app.use(Cors({origin: true}));

if(process.env.NODE_ENV === 'production') {
    Mongoose.connect(db.mongoURI, { useNewUrlParser: true }) // production
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

    app.use(Express.static('../../frontend/build')); // set static folder
    app.get('*', (req, res) => {
        res.sendFile(Path.resolve(__dirname, '..', '..', 'frontend', 'build', 'index.html'));
    });
} else {
    Mongoose.connect(db.database, { useNewUrlParser: true }) // dev ( localhost )
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));
}

    app.use('/movies', movies);

    app.get('/', (req, res) => {
        res.redirect('/movies/');
    })


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
