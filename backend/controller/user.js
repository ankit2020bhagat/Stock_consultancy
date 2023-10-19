import User from "../model/db.js";

export const register = async (req, res) => {
  try {
    const { name, phoneNo } = req.body;
    const existingUser = await User.findOne({ phoneNo });
    if (existingUser) {
      return res.status(200).json({ message: "User already exisit" });
    }

    const user = await User.create({ name, phoneNo });
    if (user) {
      return res.status(201).json({ message: "User register successfully" });
    }
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal sever error", error: err });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.find();
    if (user) {
      return res.status(200).json({ user: user });
    } else {
      return res.json({ message: "User not found" });
    }
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal sever error", error: err });
  }
};
