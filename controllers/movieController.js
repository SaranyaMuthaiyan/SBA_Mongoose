import Movie from '../models/Movie.js';

export const getMovies = async (req, res) => {
    try
    {
        const movies = await Movie.find().populate('postedBy');
        res.status(200).json(movies);

    }catch(err){
        res.status(500).json({error: err.message});

    }
};
export const createMovie = async (req, res) => {
    try{
        const movie = await Movie.create(req.body);
        res.status(201).json(movie);
    }catch(err){
        res.status(400).json({error: err.message});
    }
    };
export const updateMovie =  async(req, res) => {
    try{
        const updated = await Movie.findByIdAndUpdate(req.params.id, req.body, {new: true });
        res.status(200).json(updated);
    }catch(err){
        res.status(400).json({ error: err.message });
    }
};

export const deleteMovie = async (req, res) => {
    try{
        await Movie.findByIdAndDelete(req.params.id);
        res.status(204).end();
    }catch(err){
        res.status(500).json({ error: err.message });
    }
};