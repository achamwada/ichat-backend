const moongose = require("mongoose");
const config = require("config");
const express = require("express");
const router = express.Router();
const auth = require("../../middleware/authentication");
const { check, validationResult } = require("express-validator");
const User = require("../../models/User");
const Friend = require("../../models/Friend");
const jwt = require("jsonwebtoken");

/**
 * POST  /api/friend
 * Protected route: Friend request
 */
router.post(
  "/",
  [auth, [check("email_address", "Email Address is required").isEmail()]],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) return res.status(400).json({errors: error.array()});

    const token = req.header("x-auth-token");
    const decodedToken = jwt.verify(token, config.get("JWT_SECRET"));
    const requestingUserID = decodedToken.user_id;

    const { email_address } = req.body;
    console.log(email_address);

    try {
      const requestedFriend = await User.findOne({ email_address });
        console.log(requestedFriend);
      if (!requestedFriend) return res.status(400).json({ msg: "Bad Request" });

      const isPendingRequest = await Friend.findOne({
        relating_user: requestingUserID,
        related_user: requestedFriend._id
      });

      if(isPendingRequest) return res.status(400).json({msg: 'Friend Request already sent'});

      const friendRequest = new Friend({
        relating_user: requestingUserID,
        related_user: requestedFriend._id
      });

      await friendRequest.save((err, result) => {
        if (err) {
          console.log(err);
          return res.status(400).json({ msg: "Bad Request" });
        }

        console.log(result);
        return res.status(200).json({ msg: "Friend request sent" });
      });
    } catch (error) {
        return res.status(500).json({ msg: "Server Error" });
    }
  }
);

/**
 * Get  /api/friend
 * Protected route: lists logged in user friends
 */
router.get("/", auth, async (req, res) => {

  try {
    const friendsList = await Friend.find().where({relating_user: req.body.user.user_id});
    res.status(200).json(friendsList);
    
  } catch (error) {
    res.status(500).json({"msg": error});
    
  }
  


});

/**
 * PUT  /api/friend
 * Protected route: Accept friend request or update relationship
 */
router.put("/", auth, async (req, res) => {});

/**
 * DELETE  /api/friend
 * Protected route: Unfriend
 */
router.delete("/", auth, async (req, res) => {});

module.exports = router;
