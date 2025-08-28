import express from "express"
import { addToCart, removeFromCart, getCart } from "../controllers/cartController.js"
import authMiddleware from "../middleware/auth.js";
// import { sendDB } from "../controllers/AddCartController.js";
import { cartController } from "../controllers/userController.js";

const cartRouter = express.Router();

cartRouter.post("/add", authMiddleware, addToCart)
cartRouter.post("/remove", authMiddleware, removeFromCart)
cartRouter.post("/get", authMiddleware, getCart)
cartRouter.post('/postDatatoDB',authMiddleware,cartController);

export default cartRouter;