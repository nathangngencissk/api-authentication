const express = require('express');
const Permission = require('../models/Permission')

module.exports = () => {
    const controller = {};

    controller.getAll = (req, res) => {
        Permission.find()
            .then(permissions => {
                res.json(permissions);
            })
            .catch(error => res.status(500).json(error));
    }

    controller.add = (req, res) => {
        const newPermission = new Permission({
            name: req.body.name,
            route: req.body.route
        });

        newPermission
            .save()
            .then(permission => {
                res.json(permission);
            })
            .catch(error => {
                res.status(500).json(error);
            });
    }

    controller.edit = (req, res) => {
        const newData = {
            _id: req.params.id,
            name: req.body.name,
            route: req.body.route
        };

        Permission.findOneAndUpdate({ _id: req.params.id }, newData, { new: true })
            .then(permission => {
                res.json(permission);
            })
            .catch(error => res.status(500).json(error));
    }

    controller.delete = (req, res) => {
        Permission.findOneAndDelete({ _id: req.params.id })
            .then(permission => {
                res.json(permission);
            })
            .catch(error => res.status(500).json(error));
    }

    return controller;
}
