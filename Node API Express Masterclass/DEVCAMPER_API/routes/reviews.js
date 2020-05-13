const express = require('express');
const { getReviews, getReview } = require('../controllers/reviews');
const Review = require('../models/Review');

// Receive the bootcamp from bootcamp router
const router = express.Router({ mergeParams: true });

// Call of protect and authorize middleware
const { protect, authorize } = require('../middleware/auth');
// Call of advancedResults middleware
const advancedResults = require('../middleware/advancedResults');

// Route gets forwarded from bootcamps routes
router.route('/').get(
  advancedResults(Review, {
    path: 'bootcamp',
    select: 'name description',
  }),
  getReviews
);
//   .post(protect, authorize('publisher', 'admin'), addCourse);
router.route('/:id').get(getReview);
//   .put(protect, authorize('publisher', 'admin'), updateCourse)
//   .delete(protect, authorize('publisher', 'admin'), deleteCourse);
module.exports = router;
