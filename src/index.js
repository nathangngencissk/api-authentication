const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());

const user = require('./routes/user');
const auth = require('./routes/auth');
const book = require('./routes/book');
const log = require('./routes/log');
const role = require('./routes/role');

app.use('/api/auth', auth);
app.use('/api/user', user);
app.use('/api/book', book);
app.use('/api/log', log);
app.use('/api/role', role);

mongoose
    .connect('mongodb://db:27017/auth', {
        useNewUrlParser: true,
        useFindAndModify: false
    })
    .then(result => {
        console.log('MongoDB Connected');
    })
    .catch(error => {
        console.log(error);
    });

app.listen(9000, () => console.log('Server connected at 9000'));