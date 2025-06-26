import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        index: true
    },
    genre: String,
    releaseYear: Number,
    postedBy: {
        type: String,
        year: Number
    }

});


export default mongoose.model('Movie', movieSchema);
