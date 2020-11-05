const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());

app.use(cors());

const user = require('./routes/user');
const auth = require('./routes/auth');
const log = require('./routes/log');
const permission = require('./routes/permission');

app.use('/api/auth', auth);
app.use('/api/user', user);
app.use('/api/log', log);
app.use('/api/permission', permission);

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

app.listen(3333, () => console.log('Server connected at 3333'));