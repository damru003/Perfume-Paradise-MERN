import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    images: { type: Array, required: true },
    category: { type: String, required: true },
    bestseller: { type: Boolean },
    date: { type: Number, required: true }
});

const productModel = mongoose.model.products || mongoose.model('products', productSchema);

export default productModel;