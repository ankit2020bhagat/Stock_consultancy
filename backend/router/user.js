import express from "express";
import { register, getUser } from "../controller/user.js";
const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.get("/getuser", getUser);
export default userRouter;
