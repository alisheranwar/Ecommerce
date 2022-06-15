import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Please Enter your Valid Name'] },
  price: { type: Number, required: [true, 'Please Enter your  price'] },
  description: {
    type: String,
    required: [true, 'Please Enter your description'],
  },
});
module.exports = mongoose.model('Product', productSchema);
