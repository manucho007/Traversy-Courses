import express from 'express';
import {
  getTransactions,
  addTransactions,
  deleteTransactions,
} from '../controllers/transactionsController.js';

const router = express.Router();

router.route('/').get(getTransactions).post(addTransactions);

router.route('/:id').delete(deleteTransactions);

export default router;
