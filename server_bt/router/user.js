const express = require('express');
const router = express.Router();

const userController = require('../controller/user');

router.post('/login',userController.loginuserController);

module.exports = router;
