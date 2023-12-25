// Import required modules
const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

// Define routes
router.get('/', chatController.index);
router.post('/chat', chatController.chat);

module.exports = router;
