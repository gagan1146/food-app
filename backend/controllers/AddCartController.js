// controllers/AddCartController.js
import userModel from "../models/userModel.js";

const sendDB = async (req, res) => {
  try {
    const userId = req.user.id;   // coming from authMiddleware
    const cartData = req.body.cartData;

    if (!userId) {
      return res.status(404).json({ success:false, message: "User not found" });
    }

    await userModel.findByIdAndUpdate(
      userId,
      { cartData },
      { new: true }
    );

    res.status(200).json({ 
      success:true,
      message: "Cart data saved to DB successfully", 
      cartData 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success:false, message: "Error saving cart data", error });
  }
};

export { sendDB };