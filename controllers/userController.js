import User from '../models/Users.js';

export const getUsers = async (req, res) =>
{
    try{
        const users = await User.find();
        res.status(200).json(users);
    }catch(err){
        res.status(500).json({ error: err.message });

    }
    };

    export const createUser = async (req, res) =>{
        try{
    const users = await User.create(req.body);
        res.status(201).json(users);
    }catch(err){
        res.status(400).json({ error: err.message });
    }

};

export const updateUser = async (req, res) =>{
        try{
    const users = await User.create(req.body);
        res.status(201).json(users);
    }catch(err){
        res.status(400).json({ error: err.message });
    }

};

export const deleteUser = async (req, res) =>{
        try{
    await User.findByIdAndDelete(req.params.id);
        res.status(204).send();
    }catch(err){
        res.status(500).json({ error: err.message });
    }

};

