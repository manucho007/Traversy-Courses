const express = require('express');
const {
  getUser,
  getUsers,
  updateUser,
  deleteUser,
  createUser,
} = require('../controllers/user');
const User = require('../models/User');
const router = express.Router({ mergeParams: true });

// Call of protect and authorize middleware
const { protect, authorize } = require('../middleware/auth');
// Call of advancedResults middleware
const advancedResults = require('../middleware/advancedResults');

// Middlewares (protect and authorize) are called only once at the top and will work in all the routes
// Instead of calling on every method
router.use(protect);
router.use(authorize('admin'));

// Routes
router.route('/').get(advancedResults(User), getUsers).post(createUser);
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
