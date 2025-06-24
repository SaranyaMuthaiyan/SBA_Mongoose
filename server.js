import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();

// const app = express()
const port = process.env.PORT

await mongoose.connect(process.env.MONGODB_URI)
console.log('DB connected');


app.listen(port, () => console.log('Server running in port  ${port}')
);
