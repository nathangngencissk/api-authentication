const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());

const user = require('./routes/user');
const auth = require('./routes/auth');
const book = require('./routes/book');
const log = require('./routes/log');

app.use('/api/auth', auth);
app.use('/api/user', user);
app.use('/api/book', book);
app.use('/api/log', log);

mongoose
    .connect('mongodb://db:27017/crud-node-mongo-docker', {
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