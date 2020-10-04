const express = require('express');
const User = require('../models/User')

module.exports = () => {
    const controller = {};

    controller.getAll = (req, res) => {
        User.find()
            .then(users => {
                res.json(users);
            })
            .catch(error => res.status(500).json(error));
    }

    controller.add = (req, res) => {
        const newUser = new User({
            name: req.body.name,
            cpf: req.body.cpf,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        });

        newUser
            .save()
            .then(user => {
                res.json(user);
            })
            .catch(error => {
                res.status(500).json(error);
            });
    }

    controller.edit = (req, res) => {
        const newData = {
            _id: req.params.id,
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
    }

    controller.delete = (req, res) => {
        User.findOneAndDelete({ _id: req.params.id })
            .then(user => {
                res.json(user);
            })
            .catch(error => res.status(500).json(error));
    }

    return controller;
}
