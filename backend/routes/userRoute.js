import express from "express"
import {loginUser, registerUser} from "../controllers/userController.js";


const userRouter = express.Router();

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)
userRouter.get("/logout", (req, res) => {
  const { setCartItems } = useContext(StoreContext);
  setCartItems({});
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
});

export default userRouter