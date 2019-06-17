const connectDB = require("../config/db");
const express = require("express");
const router = express.Router();

const { check, validationResult } = require("express-validator/check");

connectDB();
// @route       GET /api/users
// @desc        list all users
// @access      Private
router.get("/", (req, res) => {
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
  (req, res) => {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
     res.json({ msg: "Add new user" });
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
