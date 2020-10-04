const express = require('express');
const Log = require('../models/Log')

module.exports = () => {
    const controller = {};

    controller.getAll = (req, res) => {
        Log.find()
            .then(logs => {
                res.json(logs);
            })
            .catch(error => res.status(500).json(error));
    }

    return controller;
}
