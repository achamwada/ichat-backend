const express = require('express');
const auth = require('../../middleware/authentication');
const router = express.Router();
const Channel = require('../../models/Channels');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');

/**
|--------------------------------------------------
| Protected route List all Channels current logged in 
| user is a part of
|--------------------------------------------------
*/
router.get('/', auth, async (req, res) => {
  try {
    const userID = req.body.user.user_id;
    console.log('userID', userID);
    const allChannels = await Channel.find({ members: userID });
    console.log('allChannels', allChannels);
    res.status(200).json({ msg: 'all good', channels: allChannels });
  } catch (error) {
    console.log('error', error);
  }
});

/**
|--------------------------------------------------
| Private Route to create a Channel
|--------------------------------------------------
*/

router.post(
  '/',
  [
    auth,
    [
      check('title', 'title is required')
        .not()
        .isEmpty(),
      check('description', 'Enter description')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    try {
      const err = validationResult(req);
      if (!err.isEmpty()) {
        return res.status(400).json({ msg: err.array() });
      }

      const { title, description, user, avatar } = req.body;

      // const userData = await User.findById(user.user_id).select('-password');

      // if (!userData) return res.status(404).json({ msg: 'user not found' });

      const channelSearch = await Channel.find({ title });

      if (channelSearch.length > 0) {
        return res
          .status(400)
          .json({ msg: 'Channel already exists', channelSearch });
      }

      const newChannel = new Channel({
        title,
        description,
        owner: user.user_id,
        members: [user.user_id],
        avatar
      });

      newChannel.save((err, channel) => {
        if (err) {
          return res.status(500).json({ msg: 'server error' });
        }

        res.status(200).json({ msg: 'created a channel', channel });
      });
    } catch (error) {
      console.log('error', error);
    }
  }
);

/**
|--------------------------------------------------
| Update Channel
|--------------------------------------------------
*/

router.put(
  '/',
  auth,
  [
    check('channel_id', 'Channel id is required')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) return res.status(400).json({ msg: errors.array() });

    const { channel_id, user } = req.body;

    try {
      const channel = await Channel.findOne({
        _id: channel_id,
        owner: user.user_id
      });

      channel.set(req.body);

      const results = await channel.save();

      res.status(400).json({ msg: 'updated', results });
    } catch (error) {
      console.log('error', error);
      res.status(400).json({ msg: 'Bad Request' });
    }
  }
);

/**
|--------------------------------------------------
| Get individual Channel
|--------------------------------------------------
*/

router.get('/:id', auth, async (req, res) => {
  const channel_id = req.params.id;

  try {
    const ChannelDetails = await Channel.findById(channel_id);

    if (ChannelDetails.isEmpty)
      return res.status(404).json({ msg: 'Channel not found' });

    res.status(200).json({ ChannelDetails });
  } catch (error) {
    console.log('error', error);
    res.status(401).json({ msg: 'Access denied' });
  }
});

router.delete('/:id', auth, async (req, res) => {
  const channel_id = req.params.id;

  try {
    const ChannelDetails = await Channel.findByIdAndDelete(channel_id);

    if (ChannelDetails.isEmpty)
      return res.status(404).json({ msg: 'Channel not found' });

    res.status(200).json({ ChannelDetails });
  } catch (error) {
    console.log('error', error);
    res.status(401).json({ msg: 'Access denied' });
  }
});

module.exports = router;
