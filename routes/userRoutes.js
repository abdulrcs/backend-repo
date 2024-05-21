const express = require('express');
const { listUsers, addUser } = require('../controller/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/update-firebase-doc', authMiddleware, addUser);
router.get('/get-firebase-docs', authMiddleware, listUsers);

module.exports = router;
