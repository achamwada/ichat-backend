const express = require('express');
const mongoose = require('mongoose');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/authentication');
const Status = require('../../models/Status');
const router = express.Router();
const config = require('config');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');

/**
|--------------------------------------------------
| Private Route GET : lists all status created by all users
|--------------------------------------------------
*/
router.get('/', async (req, res) => {
  try {
    let status = await Status.find({});
    return res.status(200).json({ user_statuses: status });
  } catch (error) {
    return res.status(500).json({ msg: 'server error' });
  }
});

/**
|--------------------------------------------------
| Private Route POST: Creates a new status 
|--------------------------------------------------
*/

router.post(
  '/',
  [auth, [check('status', 'status is required').isString()]],
  async (req, res) => {
    const errors = validationResult(req);
    console.log(errors);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors });
    }
    const token = req.header('x-auth-token');
    const { user_id } = jwt.verify(token, config.get('JWT_SECRET'));
    console.log(user_id);
    const { status } = req.body;

    try {
      const userData = await User.findById(user_id).select('-password');

      if (!userData) {
        return res.status(404).json({ msg: 'User not found' });
      }

      const newStatus = new Status({
        userID: userData._id,
        status: status
      });

      await newStatus.save((err, res) => {
        if (err) {
          return res.status(500).json({ msg: 'Server error' });
        }
        console.log(res);
      });

      res.status(200).json({ msg: `new status created! ${newStatus}` });
    } catch (error) {
      console.log('error', error);
    }
  }
);

module.exports = router;
