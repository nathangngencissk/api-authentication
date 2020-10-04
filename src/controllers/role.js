const express = require('express');
const Role = require('../models/Role')

module.exports = () => {
    const controller = {};

    controller.getAll = (req, res) => {
        Role.find()
            .then(roles => {
                res.json(roles);
            })
            .catch(error => res.status(500).json(error));
    }

    controller.add = (req, res) => {
        const newRole = new Role({
            name: req.body.name
        });

        newRole
            .save()
            .then(role => {
                res.json(role);
            })
            .catch(error => {
                res.status(500).json(error);
            });
    }

    controller.edit = (req, res) => {
        const newData = {
            _id: req.params.id,
            name: req.body.name
        };

        Role.findOneAndUpdate({ _id: req.params.id }, newData, { new: true })
            .then(role => {
                res.json(role);
            })
            .catch(error => res.status(500).json(error));
    }

    controller.delete = (req, res) => {
        Role.findOneAndDelete({ _id: req.params.id })
            .then(role => {
                res.json(role);
            })
            .catch(error => res.status(500).json(error));
    }

    return controller;
}
