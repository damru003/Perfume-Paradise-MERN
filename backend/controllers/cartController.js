import userModel from "../models/userModel.js";

const addToCart = async (req, res) => {
    try {
        const { userId, itemId } = req.body;
        const userData = await userModel.findById(userId);
        const cartData = userData.cartData;
        
        if (cartData[itemId]) {
            cartData[itemId] += 1;
        } else {
            cartData[itemId] = 1;
        }

        await userModel.findByIdAndUpdate(userId, {cartData})

        res.json({success:true , message:"Added to Cart.."});
    }
    catch (error) {
        console.log(error)
        res.json({success:false, message:error.message});
    }
}

const updateCart = async (req, res) => {
  try {
    const { itemId, userId, quantity } = req.body;

    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const cartData = userData.cartData || {};

    if (quantity === 0) {
      delete cartData[itemId];
    } else {
      cartData[itemId] = quantity;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: quantity === 0 ? "Item removed from cart" : "Cart updated" });
  } catch (error) {
    console.error("❌ updateCart error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};


const getUserCart = async (req, res) => {
    try {
        const { userId }  = req.body;
        const userData = await userModel.findById(userId);
        const cartData = userData.cartData;

        res.json({success:true, cartData});
    }
    catch (error) {
        console.log(error);
        res.json({success:false, message:error.message});
    }
}

export { addToCart, updateCart, getUserCart };