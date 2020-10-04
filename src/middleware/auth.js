const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Log = require('../models/Log');

function auth() {
    return [
        async (req, res, next) => {

            if (!req.headers.authorization) {
                return res.status(403).json({ message: 'User not authenticated' })
            }

            const token = req.headers.authorization.split(' ')[1];
            const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
            const userId = decodedToken.userId;

            //Check if user has token (authenticated)
            if (req.body.userId && req.body.userId !== userId) {
                throw 'Invalid user ID';
            }

            next();
        }
    ];
}


module.exports = auth;