import express from 'express';
import userRoutes from './routes/userRoutes.js';
import movieRoutes   from './routes/movieRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/reviews', reviewRoutes);

export default app;