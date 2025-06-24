import Review from '../models/Review.js';

export const getReviews = async (req, res) => {
    try{
        const reviews = await Review.find().populate('movie reviewer');
        res.status(200).json(reviews);
    }catch(err){
        res.status(500).json({ eroor: err.message });
    }
    };

    export const createReview = async (req, res) => {
    try{
        const reviews = await Review.create('req.body');
        res.status(201).json(review);
    }catch(err){
        res.status(400).json({ eroor: err.message });
    }
    };

    export const deleteReview = async (requestAnimationFrame, res) => {
    try{
        await Review.findByIdAndDelete(req.params.id);
        res.status(204).end();
    }catch(err){
        res.status(500).json({ eroor: err.message });
    }
    };

