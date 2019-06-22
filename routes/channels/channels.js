const express = require("express");
const Channel = require("../../models/Channel");
const { check, validationResult } = require("express-validator/check");
const dbConnect = require("../../config/db");
const auth = require("../../middleware/auth");
const jwt_decode = require('jwt-decode');


dbConnect();

const router = express.Router();

// List all channels
router.get("/", async (req, res) => {
  try {
    const Channels = await Channel.find();
    if (Channels.length > 0) {
      return res.status(200).json({ Channels });
    } else {
      return res.status(404).json({ msg: "No Channels found" });
    }
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// Create new channel
router.post(
  "/",
  [
    auth,
    [
      check("title", "Title is required")
        .not()
        .isEmpty(),
      check("description", "A decription is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) res.status(400).json({ errors: errors.array() });
    const { title, description } = req.body;
    const user_token = req.body.user.user_id;

    try {
      const checkForChannel = await Channel.findOne({ title, description });

      if (checkForChannel) {
        return res.status(400).json({ msg: "Channel already exists" });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "Server error" });
    }

    try {
      const newChannel = new Channel({ title, description, admininstrators: user_token });
    
      savedChannel = await newChannel.save();
    } catch (err) {
        console.log(err);
      return res.status(500).json({ msg: "Server error" });
    }

    console.log(savedChannel);
    return res.status(200).json({ savedChannel });
  }
);

module.exports = router;
