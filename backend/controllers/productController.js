import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";


const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, bestseller } = req.body;

        const image1 = req.files?.image1?.[0];
        const image2 = req.files?.image2?.[0];
        const image3 = req.files?.image3?.[0];
        const image4 = req.files?.image4?.[0];


        const images = [image1, image2, image3, image4].filter((item) => item != undefined).flat();

        let imageUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path,
                    { resource_type: "image" });
                return result.secure_url
            })
        );

        const productData = {
            name,
            description,
            price: Number(price),
            category,
            bestseller: bestseller === 'true' ? true : false,
            images: imageUrl,
            date: Date.now()
        }

        console.log(productData);

        const product = new productModel(productData);
        await product.save();

        res.json({ success: true, message: 'Product added successfully' });
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const listProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.status(200).json({
            success: true,
            products,
          });
          
    } catch (error) {
        console.error("Error listing products:", error);
        res.status(500).json({ message: "Failed to retrieve products" });
    }
};

const removeProduct = async (req, res) => {
    try {
        const { id } = req.body;

        const deletedProduct = await productModel.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.json({ success: false, message: "Product not found." });
        }

        res.json({ success: true, message: "Product removeds successfully." });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message });
    }
};

const singleProduct = async (req, res) => {
    try {
        const { id } = req.body;
        const product = await productModel.findById(id);
        res.json({ success: true, product })
    }
    catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message });
    }
};

export { addProduct, listProducts, removeProduct, singleProduct };