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

// Include other resource routers
const courseRouter = require('./courses');

// Initialize router
const router = express.Router();

// Re-route into other resource routers
router.use('/:bootcampId/courses', courseRouter);

// Routes come from the controllers
router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);
router.route('/').get(getBootcamps).post(createBootcamp);
router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);
router.route('/:id/photo').put(bootcampPhotoUpload);

module.exports = router;
