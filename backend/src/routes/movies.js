const Express = require('express');
const router = Express.Router();

const Movie = require('../models/movie');

/**
 * @route GET /movies
 * @desc Get all movies
 */
router.get('/', (req, res) => {
    Movie.find().then(movies => res.json(movies))
        // .sort({ title: 1 }) // sort by title acending order
});

/**
 * @route POST /movies
 * @desc create a movies
 */
router.post('/', (req, res) => {
    const newMovie = new Movie({
        title: req.body.title,
        description: req.body.description,
        release_date: req.body.release_date
    });
    newMovie.save().then( movie => res.json(movie));
});

/**
 * @route delete /movies/:id
 * @desc delete a movies
 */
router.delete('/:id', (req, res) => {
    Movie.findById(req.params.id)
        .then(movie => movie.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

// TODO: an UPDATE method ( PUT )

module.exports = router;
