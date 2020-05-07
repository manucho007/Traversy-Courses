const express = require('express');
const { getCourses } = require('../controllers/courses');

// Receive the bootcamp from bootcamp router
const router = express.Router({ mergeParams: true });

router.route('/').get(getCourses);
module.exports = router;
