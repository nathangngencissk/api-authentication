const express = require('express');
const router = express.Router();

const User = require('../models/User.js');

router.get('/', (req, res) => {
  User.find()
    .then(users => {
      res.json(users);
    })
    .catch(error => res.status(500).json(error));
});

router.post('/add', (req, res) => {
  const newUser = new User({
    name: req.body.name,
    cpf: req.body.cpf,
    email: req.body.email,
    password: req.body.password
  });

  newUser
    .save()
    .then(user => {
      res.json(user);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.put('/edit/:id', (req, res) => {
  const newData = {
    name: req.body.name,
    cpf: req.body.cpf,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role
  };

  User.findOneAndUpdate({ _id: req.params.id }, newData, { new: true })
    .then(user => {
      res.json(user);
    })
    .catch(error => res.status(500).json(error));
});

router.delete('/delete/:id', (req, res) => {
  Carro.findOneAndDelete({ _id: req.params.id })
    .then(user => {
      res.json(user);
    })
    .catch(error => res.status(500).json(error));
});

module.exports = router;