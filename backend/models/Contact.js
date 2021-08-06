import mongoose from 'mongoose';
const contactSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    email: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    sdt: {
        type: Number,
    },
    text: {
        type: String,
        required: true,
        trim: true,
        maxlength: 2000
    }
}, { timeStamps: true });
module.exports = mongoose.model('Contact', contactSchema);
