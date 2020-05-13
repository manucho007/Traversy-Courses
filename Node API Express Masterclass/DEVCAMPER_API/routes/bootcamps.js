const express = require('express');
const {
  getBootcamp,
  getBootcamps,
  updateBootcamp,
  deleteBootcamp,
  createBootcamp,
  getBootcampsInRadius,
  bootcampPhotoUpload,
} = require('../controllers/bootcamps');
const Bootcamp = require('../models/Bootcamp');

// Include other resource routers
const courseRouter = require('./courses');
const reviewRouter = require('./reviews');

// Initialize router
const router = express.Router();

// Call of protect and authorize middleware
const { protect, authorize } = require('../middleware/auth');
// Call of advancedResults middleware
const advancedResults = require('../middleware/advancedResults');

// Re-route into other resource routers
router.use('/:bootcampId/courses', courseRouter);
router.use('/:bootcampId/reviews', reviewRouter);

// Routes come from the controllers
router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);
// Usage of advancedResults middleware for getBootcamps method
router
  .route('/')
  .get(advancedResults(Bootcamp, 'courses reviews'), getBootcamps)
  .post(protect, authorize('publisher', 'admin'), createBootcamp);
router
  .route('/:id')
  .get(getBootcamp)
  .put(protect, authorize('publisher', 'admin'), updateBootcamp)
  .delete(protect, authorize('publisher', 'admin'), deleteBootcamp);
router
  .route('/:id/photo')
  .put(protect, authorize('publisher', 'admin'), bootcampPhotoUpload);

module.exports = router;
