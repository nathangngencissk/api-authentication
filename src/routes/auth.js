const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Log = require('../models/Log');

router.post('/authenticate', (req, res) => {

    User.findOne({ email: req.body.email, password: req.body.password }, function (err, user) {
        if (err) {
            console.log(err);
        }
        else {
            const token = jwt.sign(
                { userId: user._id },
                'RANDOM_TOKEN_SECRET',
                { expiresIn: '24h' });

            const newLog = new Log({
                user: user._id,
                description: 'User logged in.'
            });

            newLog.save();

            res.status(200).json({
                user: user,
                token: token
            });
        }
    });
});

module.exports = router;