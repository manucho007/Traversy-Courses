const express = require('express');
const {
  getReviews,
  getReview,
  addReview,
  updateReview,
  deleteReview,
} = require('../controllers/reviews');
const Review = require('../models/Review');

// Receive the bootcamp from bootcamp router
const router = express.Router({ mergeParams: true });

// Call of protect and authorize middleware
const { protect, authorize } = require('../middleware/auth');
// Call of advancedResults middleware
const advancedResults = require('../middleware/advancedResults');

// Route gets forwarded from bootcamps routes
router
  .route('/')
  .get(
    advancedResults(Review, {
      path: 'bootcamp',
      select: 'name description',
    }),
    getReviews
  )
  .post(protect, authorize('user', 'admin'), addReview);
router
  .route('/:id')
  .get(getReview)
  .put(protect, authorize('user', 'admin'), updateReview)
  .delete(protect, authorize('user', 'admin'), deleteReview);
module.exports = router;
