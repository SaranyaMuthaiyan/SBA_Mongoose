import mongoose from 'mongoose';
import dotenv from 'dotenv';
// import app from './app.js';
import express from 'express';
import apiRoutes from './routes/apiRoutes.js';

dotenv.config();
const PORT = process.env.PORT
const app = express();

app.use(express.json());
app.use('/api/', apiRoutes);


await mongoose.connect(process.env.MONGODB_URL)

    console.log('MongoDb connected');
    app.listen(PORT, () =>
    console.log(`Server running  in  ${PORT}`)
);
