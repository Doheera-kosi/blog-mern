import User from "../models/user.model.js";

export const signup = async (req, res) => {
  // console.log(req.body);
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newUser = new User({
    username,
    email,
    password,
  });
  try {
    await newUser.save();
    res.status(200).json({ message: "Signup successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
