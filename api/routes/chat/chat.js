const express = require('express');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/authentication');
const router = express.Router();
const Chat = require('../../models/Chats');

/**
|--------------------------------------------------
| POST : create new chat
|--------------------------------------------------
*/
router.post(
  '/',
  [
    auth,
    [
      check('message', 'message is required')
        .not()
        .isEmpty(),
      check('channel_id', 'channel is is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { message, channel_id, user } = req.body;

    try {
      const newChatMessage = new Chat({
        message,
        user: user.user_id,
        channel: channel_id
      });

      const result = await newChatMessage.save((err, chat) => {
        if (err) {
          console.log('err', err);
          return res
            .status(500)
            .json({ error: 'Server Error', msg: 'not saved' });
        }

        res.status(200).json({ msg: 'all good', chat });
      });
    } catch (error) {
      return res.status(500).json({ error: 'Server Error' });
    }
  }
);

module.exports = router;
