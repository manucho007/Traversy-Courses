const express = require('express');
const {
  getCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse,
} = require('../controllers/courses');

// Receive the bootcamp from bootcamp router
const router = express.Router({ mergeParams: true });

// Route gets forwarded from bootcamps routes
router.route('/').get(getCourses).post(addCourse);
router.route('/:id').get(getCourse).put(updateCourse).delete(deleteCourse);
module.exports = router;
