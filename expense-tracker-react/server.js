import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';
import connectDB from './config/db.js';

dotenv.config({ path: './config/config.env' });

connectDB();

import transactions from './routes/transactionsRoutes.js';

const app = express();

// Body parser
app.use(express.json());

// Mounting routes
app.use('/api/v1/transactions', transactions);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode in port ${PORT}`.yellow.bold
  )
);
