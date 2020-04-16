const express = require('express');
const messageControllers = require('../controllers/messageControllers');

const router = express.Router();

router
  .route('/')
  .get(messageControllers.getMessages)
  .post(messageControllers.postMessage);

router
  .route('/:id')
  .patch(messageControllers.updateMessage)
  .delete(messageControllers.deleteMessage);

module.exports = router;
