const jwt = require('jsonwebtoken');
const User = require('../models/User.js');

function auth(roles = []) {
    if (typeof roles === 'string') {
        roles = [roles];
    }

    return [
        (req, res, next) => {

            const token = req.headers.authorization.split(' ')[1];
            const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
            const userId = decodedToken.userId;

            //Check if user has token (authenticated)
            if (req.body.userId && req.body.userId !== userId) {
                throw 'Invalid user ID';
            }

            User.findOne({ _id: userId }, function (err, user) {
                if (roles.length && !roles.includes(user.role)) {

                    // Check if users role is authorized
                    return res.status(401).json({ message: 'User unauthorized' });
                }
                else {

                    // User is authenticated and authorized
                    next();
                }
            });
        }
    ];
}


module.exports = auth;