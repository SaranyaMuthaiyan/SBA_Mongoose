import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        index: true
    },

    email: {
        type: String,
        reuired: true,
        unique: true,
        match: /.+\@.+\..+/,
        index: true
    },
    joinedAt: {
        type: Data,
        default: Date.now
    }
});

export default mongoose.model('User', userSchema);
