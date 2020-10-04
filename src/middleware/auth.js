const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Log = require('../models/Log');
const Role = require('../models/Role');

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

            let role = await Role.findOne({ _id: user.role })

            if (roles) {
                if (roles.length && !roles.includes(role.name)) {

                    // Check if users role is authorized
                    return res.status(401).json({ message: 'User unauthorized' });
                }
            }
            const newLog = new Log({
                user: user._id,
                description: `User accessed ${req.originalUrl}.`
            });

            newLog.save();

            next();
        }
    ];
}


module.exports = auth;