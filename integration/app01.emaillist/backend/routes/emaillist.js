const express = require('express');
const controller = require('../controller/emaillist');

const router = express.Router();
router.route('').get(controller.readAll());

module.exports =route;