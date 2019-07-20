const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');
const DBconn = require('../../config/db');
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');
const auth = require('../../middleware/authentication');
const router = express.Router();
DBconn();

/**
 * POST:  /api/user/
 * Register new user
 */
router.post(
  '/',
  [
    check('user_name', 'Username is require')
      .not()
      .isEmpty(),
    check('email_address', 'An email is required').isEmail(),
    check('password', 'Password is required')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const err = validationResult(req);
    if (!err.isEmpty()) return res.status(400).json({ errors: err.array() });

    const { user_name, email_address, password } = req.body;

    try {
      const isUser = await User.findOne({
        user_name,
        email_address
      });

      if (isUser) return res.status(400).json({ msg: 'User already exists' });

      const newUser = new User({
        user_name,
        email_address
      });

      const salt = await bcrypt.genSalt(10);
      newUser.password = await bcrypt.hash(password, salt);

      await newUser.save((err, user) => {
        // find a way of handling duplicate inserts in the response
        if (err) return res.status(500).json({ msg: err.errmsg });

        const payload = {
          user_id: user._id
        };

        const token = jwt.sign(payload, config.get('JWT_SECRET'), {
          expiresIn: 36000
        });

        res.status(200).json({ msg: 'registered user', user, token });
      });
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({ msg: 'Server Error' });
    }
  }
);

/**
 * GET  /api/user
 * Protected route to logged user details
 */
router.get('/', auth, async (req, res) => {
  try {
    const userData = await User.findById(req.body.user.user_id).select(
      '-password'
    );

    if (!userData) return res.status(404).json({ msg: 'user not found' });

    return res.status(200).json({ user: userData });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'Server Error' });
  }
});

/**
 * PUT /api/user/:user_id
 * Protected route
 */
router.put('/', auth, async (req, res) => {
  const token = req.header('x-auth-token');

  const {
    user_name,
    avatar,
    bio,
    skills,
    first_name,
    phone_number,
    password
  } = req.body;

  const user_fields = {};

  if (avatar) user_fields.avatar = avatar;
  if (bio) user_fields.bio = bio;
  if (skills) user_fields.skills = skills;
  if (first_name) user_fields.first_name = first_name;
  if (phone_number) user_fields.phone_number = phone_number;
  if (user_name) user_fields.user_name = user_name;

  try {
    if (password) {
      const salt = await bcrypt.genSalt(10);
      user_fields.password = await bcrypt.hash(password, salt);
    }

    const decodedToken = jwt.verify(token, config.get('JWT_SECRET'));
    const user_id = decodedToken.user_id;

    await User.findByIdAndUpdate(user_id, { $set: user_fields });

    // this is not updating on first request
    return res.status(200).json({ msg: 'user updated' });
  } catch (error) {
    return res.status(400).json({ msg: 'Bad request' });
  }
});

/**
 * DELETE   /api/user/
 * Protected route that deletes users account
 */

router.delete('/', auth, async (req, res) => {
  try {
    const token = req.header('x-auth-token');
    const decoded_user = jwt.verify(token, config.get('JWT_SECRET'));

    const user_id = decoded_user.user_id;

    await User.findByIdAndRemove(user_id);

    return res.status(200).json({ msg: 'Account Deleted' });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ msg: 'Server Error' });
  }
});

module.exports = router;
