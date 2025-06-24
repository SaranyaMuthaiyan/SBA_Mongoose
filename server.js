import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();


// const port = process.env.PORT

// await mongoose.connect(process.env.MONGODB_URI)
// console.log('DB connected');
// app.listen(port, () => console.log('Server running in port  ${port}')
// );

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('MongoDb connected');
    app.listen(process.env.PORT, () =>
    console.log('Server running  ${process.env.PORT}')
);
})
.catch((err) => console.error(err));
