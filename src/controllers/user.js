const express = require('express');
const User = require('../models/User');
const Permission = require('../models/Permission');
const mongoose = require('mongoose');

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
            permissions: req.body.permissions
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
            permissions: req.body.permissions
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

    controller.getPermissions = async (req, res) => {
        try {

            let user = await User.findOne({ _id: req.params.id });

            let permissions = await Permission.find({
                '_id': { $in: user.permissions }
            });

            userPermissions = [];

            permissions.forEach(permission => {
                userPermissions.push({
                    permissionId: permission._id,
                    permissionName: permission.name,
                    route: permission.route
                })
            })

            res.json({
                user: user._id,
                permissions: userPermissions
            })

            // user.permissions.forEach(async userPermission => {

            //     let permission = await Permission.findOne({ _id: userPermission });

            //     permissions.push({
            //         permissionId: permission._id,
            //         permissionName: permission.name,
            //         route: permission.route
            //     });

            //     console.log(permissions)
            // })
        }
        catch (error) {
            res.status(500).json(error)
        }
    }

    return controller;
}
