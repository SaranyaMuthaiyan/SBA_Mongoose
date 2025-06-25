 import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        index: true
    },
genre: String,
releaseYear: Number,
postedBy:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
}

});
      

export default mongoose.model('Movie', movieSchema);
