const connectDB = require("../../config/db");
const express = require("express");
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const { check, validationResult } = require("express-validator/check");
const bcrypt = require('bcryptjs');

connectDB();
// @route       GET /api/users
// @desc        list all users
// @access      Private
router.get("/", auth, (req, res) => {
  res.json({ msg: "get users" });
});

// @route       POST /api/users
// @desc        insert new user
// @access      Private
router.post(
  "/",
  [
    check("username", "Username is required")
      .not()
      .isEmpty(),
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").isLength({
      min: 6
    })
  ],
  async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    const user = await User.findOne({ email });
    //console.log(user);
    if (user) {
      return res.status(400).json({ msg: 'User exists' });

    }


    try {

      const salt = await bcrypt.genSalt(10);
      const hashedpassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        username, email, password: hashedpassword
      });

      const createdUser = await newUser.save();
      res.status(200).json({ createdUser })
    } catch (err) {
      console.log(err.message);
    }

  }
);

// @route       PUT /api/users/:user
// @desc        Updating an existing user
// @access      Private
router.put("/:user_id", (req, res) => {
  res.json({ msg: "Update user" });
});

// @route       DELETE /api/users/:user
// @desc        delete an existing user
// @access      Private
router.delete("/:user_id", (req, res) => {
  res.json({ msg: "Delete user" });
});

module.exports = router;
