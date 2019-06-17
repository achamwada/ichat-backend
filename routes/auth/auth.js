const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator/check');

const route = express.Router();

// @route /api/auth/        POST
// @desc authenticate user and login
// @access                  Public
route.post('/', [
    check('username', 'Provide username').exists(),
    check('password', 'Provide password').exists()
], async (req, res) => {

    const { username, password } = req.body;

    try {

        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json({ msg: 'Invalid user' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ msg: 'Invalid user' });
        }

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, config.get('JWT_SECRET'), { expiresIn: 3600 }, (err, token) => {
            if (err) throw err;
            res.status(200).json({ token });

        })
    } catch (err) {
        console.log(err.message);

    }


});

module.exports = route;