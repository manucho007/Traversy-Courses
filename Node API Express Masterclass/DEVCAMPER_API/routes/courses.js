const express = require('express');
const {
  getCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse,
} = require('../controllers/courses');
const Course = require('../models/Course');

// Receive the bootcamp from bootcamp router
const router = express.Router({ mergeParams: true });

// Call of protect and authorize middleware
const { protect, authorize } = require('../middleware/auth');
// Call of advancedResults middleware
const advancedResults = require('../middleware/advancedResults');

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
  .post(protect, authorize('publisher', 'admin'), addCourse);
router
  .route('/:id')
  .get(getCourse)
  .put(protect, authorize('publisher', 'admin'), updateCourse)
  .delete(protect, authorize('publisher', 'admin'), deleteCourse);
module.exports = router;
