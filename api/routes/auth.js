const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt =require("jsonwebtoken")

router.post("/register", async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString(),
    });
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).json({ message: "Account not found" });

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    if (originalPassword !== req.body.password)
      return res.status(404).json({ message: "Wrong email or password" });
      const accessToken = jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.SECRET_KEY,{expiresIn:"1d"})
    const { password, ...data } = user._doc;
    res.status(200).json({...data,accessToken});
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;
