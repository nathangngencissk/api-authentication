const express = require('express');

module.exports = () => {
    const controller = {};

    controller.getAll = (req, res) => res.status(200).json({'books':[{'name': 'Book1'}, {'name': 'Book2'}]});

    return controller;
}
