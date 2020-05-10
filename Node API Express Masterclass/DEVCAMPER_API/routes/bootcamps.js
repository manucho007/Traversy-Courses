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
const advancedResults = require('../middleware/advancedResults');

// Include other resource routers
const courseRouter = require('./courses');

// Initialize router
const router = express.Router();

// Call of protect middleware
const { protect } = require('../middleware/auth');

// Re-route into other resource routers
router.use('/:bootcampId/courses', courseRouter);

// Routes come from the controllers
router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);
// Usage of advancedResults middleware for getBootcamps method
router
  .route('/')
  .get(advancedResults(Bootcamp, 'courses'), getBootcamps)
  .post(protect, createBootcamp);
router
  .route('/:id')
  .get(getBootcamp)
  .put(protect, updateBootcamp)
  .delete(protect, deleteBootcamp);
router.route('/:id/photo').put(protect, bootcampPhotoUpload);

module.exports = router;
