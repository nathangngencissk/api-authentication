const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Log = require('../models/Log');

function auth(roles = []) {
    if (typeof roles === 'string') {
        roles = [roles];
    }

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

            let user = await User.findOne({ _id: userId });

            if (roles) {
                if (roles.length && !roles.includes(user.role)) {

                    // Check if users role is authorized
                    return res.status(401).json({ message: 'User unauthorized' });
                }
            }
            const newLog = new Log({
                description: `User ${user._id} accessed ${req.originalUrl}.`
            });

            newLog.save();

            next();
        }
    ];
}


module.exports = auth;