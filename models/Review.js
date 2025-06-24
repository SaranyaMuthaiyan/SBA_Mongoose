import mongoose from 'mongoose'

const revSchema = new mongoose.SchemaType({
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie'
    },
    reviewerId: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    rating:{
        type: Number,
        reuired:true,
        min: 1,
        max: 10
    },
 comment: {
    type: String,
    required: true
 },
    createdAt: {
        type:Date,
        default:Date.now}   
});

export default mongoose.Schema('Review', revSchema);
