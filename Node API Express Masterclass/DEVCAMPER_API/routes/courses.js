const express = require('express');
const {
  getCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse,
} = require('../controllers/courses');
const Course = require('../models/Course');
const advancedResults = require('../middleware/advancedResults');

// Receive the bootcamp from bootcamp router
const router = express.Router({ mergeParams: true });

// Call of protect middleware
const { protect } = require('../middleware/auth');

// Route gets forwarded from bootcamps routes
// Usage of advancedResults middleware for getCourses method
router
  .route('/')
  .get(
    advancedResults(Course, {
      path: 'bootcamp',
      select: 'name description',
    }),
    getCourses
  )
  .post(protect, addCourse);
router
  .route('/:id')
  .get(getCourse)
  .put(protect, updateCourse)
  .delete(protect, deleteCourse);
module.exports = router;
