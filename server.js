import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();


const PORT = process.env.PORT

// await mongoose.connect(process.env.MONGODB_URI)
// console.log('DB connected');
// app.listen(port, () => console.log('Server running in port  ${port}')
// );

await mongoose.connect(process.env.MONGODB_URI)

    console.log('MongoDb connected');
    app.listen(PORT, () =>
    console.log(`Server running  ${PORT}`)
);
