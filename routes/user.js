const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

const { route } = require('./stuff');

router.post('/signup', userCtrl.singup);
router.post('/login', userCtrl.login);

module.exports = router;