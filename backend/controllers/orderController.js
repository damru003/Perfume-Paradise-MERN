import orderModel from "../models/ordersModel.js";
import userModel from "../models/userModel.js";
import Stripe from 'stripe';
import razorpay from 'razorpay';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const razorpayInstance = new razorpay({
    key_id: process.env.RAZORYPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});


const currency = 'inr';
const deliveryCharges = 100

// If order placing through COD Method

const placeOrder = async (req, res) => {

    try {

        const { userId, items, amount, address, username } = req.body;

        const orderData = await orderModel.create({
            userId,
            username,
            items,
            address,
            amount,
            paymentMethod: "COD",
            payment: false,
            date: new Date()
        });

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId, { cartData: {} })

        res.json({ success: true, message: "Order Place Successfully.." })

    }

    catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

};

// If order placing Stripe Method

const placeOrderStripe = async (req, res) => {
    try {
        const { userId, username, items, amount, address } = req.body;
        const { origin } = req.headers;

        const orderData = await orderModel.create({
            userId,
            username,
            items,
            address,
            amount,
            paymentMethod: "Stripe",
            payment: false,
            date: new Date()
        });

        const newOrder = new orderModel(orderData);
        await newOrder.save()

        const line_items = items.map((item) => ({
            price_data: {
                currency: currency,
                product_data: {
                    name: item.name,
                },
                unit_amount: item.price * 100,
            },
            quantity: item.quantity,
        }))

        line_items.push({
            price_data: {
                currency: 'inr',
                product_data: {
                    name: 'Delivery Charges',
                },
                unit_amount: deliveryCharges * 100,
            },
            quantity: 1
        })

        const session = await stripe.checkout.sessions.create({
            success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode: 'payment',
        })

        res.json({ success: true, session_url: session.url })

    }
    catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
};

const verifyStripe = async (req, res) => {
    const { orderId, success, userId } = req.body;

    try {
        if (success === "true") {
            await orderModel.findByIdAndUpdate(orderId, { payment: true });
            await userModel.findByIdAndUpdate(userId, { cartData: {} })
            res.json({ success: true });
        }
        else {
            await orderModel.findByIdAndDelete(orderId);
            res.json({ success: false });
        }
    }

    catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// If order placing through Razorypay Method 

const placeOrderRazorpay = async (req, res) => {
    try {
        const { userId, username, items, amount, address } = req.body;

        // Create an order in the database
        const orderData = await orderModel.create({
            userId,
            username,
            items,
            address,
            amount,
            paymentMethod: "Razorpay",
            payment: false,
            date: new Date()
        });

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        // Check if the amount is in paise or rupees
        let finalAmount = amount;

        // If amount is in INR (rupees), convert it to paise by multiplying by 100
        if (currency.toUpperCase() === "INR") {
            finalAmount = amount * 100;
        }

        const options = {
            amount: finalAmount,
            currency: currency.toUpperCase(), // Currency code
            receipt: newOrder._id.toString()
        };

        // Create Razorpay order
        razorpayInstance.orders.create(options, (error, order) => {
            if (error) {
                console.log(error);
                return res.json({ success: false, message: error.message });
            }

            const amountInINR = order.amount / 100;  // Convert amount from paise to INR
            console.log(`Amount to pay: ₹${amountInINR.toFixed(2)}`);

            // Send the Razorpay order details back to the frontend
            res.json({ success: true, order: { ...order, amountInINR } });
        });


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const verifyRazorpay = async (req, res) => {
    try {

        const { userId, razorpay_order_id, } = req.body;

        const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id)

        if(orderInfo.status === 'paid') {
            await orderModel.findByIdAndUpdate(orderInfo.receipt, {payment:true})
            await userModel.findByIdAndUpdate(userId, {cartData:{}})
            res.json({success:true, message:"Payment Successfully"})
        }
        else {
            res.json({success:false, message:"Payment Failed"})
        }
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// All orders data in admin panel

const allOrders = async (req, res) => {

    try {
        const orders = await orderModel.find({});
        res.json({ success: true, orders })
    }

    catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message });
    }
};

// User data from frontend

const userOrders = async (req, res) => {
    try {
        const { userId } = req.body;
        const orders = await orderModel.find({ userId });
        res.json({ success: true, orders })
    }
    catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message });
    };
};

// update order status from admi panel

const updateStatus = async (req, res) => {

    try {
        const { orderId, status } = req.body;

        await orderModel.findByIdAndUpdate(orderId, { status })

        res.json({ success: true, message: "Status Updated Successfully" })
    }
    catch (error) {
        console.log(error);
        res.json({ seccess: false, message: error.message })
    }
};

export { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus, verifyStripe, verifyRazorpay };