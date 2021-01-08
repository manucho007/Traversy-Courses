import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';
import connectDB from './config/db.js';
import path from 'path';

dotenv.config({ path: './config/config.env' });

connectDB();

import transactions from './routes/transactionsRoutes.js';

const app = express();

// Body parser
app.use(express.json());

// Morgan middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mounting routes
app.use('/api/v1/transactions', transactions);

// If any route other than our API is accessed it will return our built index.html as SPA
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode in port ${PORT}`.yellow.bold
  )
);
