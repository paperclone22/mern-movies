const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const MovieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    release_date: {
        type: Date
    }
});

module.exports = Movie = Mongoose.model('movies', MovieSchema);
