import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema; // đay là 1 kiểu dũ liệu  userscheam
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        maxlength: 32,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: 2000
    },
    price: {
        type: Number,
        trim: true,
        required: true,
        maxlength: 32
    },
    category: {
        type: ObjectId,
        ref: "Category",
        required: true
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    quantity: {
        type: Number,
    },
    sold: {
        type: Number,
        default: 0
    },
    shipping: {
        required: false,
        type: Boolean
    }
}, { timestamps: true })

module.exports = mongoose.model("Product", productSchema);