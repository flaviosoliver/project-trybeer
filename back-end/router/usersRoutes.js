const express = require('express');
const usersController = require('../controller/usersController');

const router = express.Router();

router.post('/login', usersController.login);
router.post('/search', usersController.findUserByEmail);
router.post('/register', usersController.createUserController);
router.put('/updateName', usersController.updateName);

module.exports = router;
