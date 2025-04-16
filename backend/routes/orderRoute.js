import express from 'express';
import { placeOrder, allOrders, placeOrderRazorpay,placeOrderStripe, updateStatus,userOrders, verifyStripe, verifyRazorpay } from '../controllers/orderController.js';
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';

const orderRouter = express.Router();

// For Admin only
orderRouter.post('/list', adminAuth ,allOrders);
orderRouter.post('/status', adminAuth ,updateStatus);

// Payment Method 
orderRouter.post('/place', authUser ,placeOrder);

orderRouter.post('/stripe', authUser ,placeOrderStripe);
orderRouter.post('/verifystripe', authUser ,verifyStripe);

orderRouter.post('/razorpay', authUser ,placeOrderRazorpay); 
orderRouter.post('/verifyrazorpay', authUser ,verifyRazorpay);

// For users
orderRouter.post('/orders', authUser, userOrders);


export default orderRouter;