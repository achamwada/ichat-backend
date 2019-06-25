const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");
const config = require("config");

router.post(
  "/",
  [
    check("email_address", "Email is required").isEmail(),
    check("password", "Password is required")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const { email_address, password } = req.body;

    try {
      const isUser = await User.findOne({
        email_address
      });
      console.log(isUser);

      if (!isUser) return res.status(404).json({ msg: "User not found" });

      await bcrypt.compare(password, isUser.password, (err, match) => {
        if (!match) return res.status(404).json({ msg: "No match", err });

        const payload = {
          user_id: isUser._id
        };

        const token = jwt.sign(payload, config.get("JWT_SECRET"), {
          expiresIn: 36000
        });

        return res.status(200).json({ token });
      });
    } catch (error) {
      console.log(error.message);
      return res
        .status(500)
        .json({ msg: "Server Error", error: error.message });
    }
  }
);

module.exports = router;