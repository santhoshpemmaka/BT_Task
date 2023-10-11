const express = require('express');

const feedbackController = require('../controller/feebBack');

const router = express.Router();

// get feedback's from the server
router.get('/', feedbackController.getallFeedbackController);

// Add feedback to the server
router.post('/',feedbackController.postFeedbackController)


module.exports = router;
