import mongoose from 'mongoose';
const categorySchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxLength: 32
  },
  photo: {
    data: Buffer,
    contentType: String
  },
}, { timeStamps: true }); // biết được ngày tháng tạo ra 
module.exports = mongoose.model("Category", categorySchema);
