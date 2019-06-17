const express = require('express');
const router = express.Router();

// @route       GET /api/chats
// @desc        list all chats
// @access      Private
router.get('/', (req, res) => {
    res.json({msg: 'get chats'});
});


// @route       POST /api/chats
// @desc        insert new chat
// @access      Private
router.post('/', (req, res) => {
    res.json({msg: 'Add new chat'});

});


// @route       PUT /api/chats/:chat_id
// @desc        Updating an existing chat
// @access      Private
router.put('/:chat_id', (req, res) => {
    res.json({msg: 'Update chat'});
});

// @route       DELETE /api/chat/:chat_id
// @desc        delete an existing chat
// @access      Private
router.delete('/:chat_id', (req, res) => {
    res.json({msg: 'Delete chat'});
});

module.exports = router;