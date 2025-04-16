import express from "express";
import cors from "cors";
import 'dotenv/config';
import connectDb from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";


const app = express();

const PORT = process.env.PORT || 4000;

connectDb();
connectCloudinary();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/api/user', userRouter);

app.use('/api/product', productRouter);

app.use('/api/cart', cartRouter);

app.use('/api/order', orderRouter)


app.get('/', (req,res)=> {
    res.send("API WORKING");
});

app.listen(PORT, () => {
    console.log(`server started on ${PORT} PORT` )
});