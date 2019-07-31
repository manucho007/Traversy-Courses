const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const members = require('./Members');
const app = express();
const logger = require('./middleware/logger');
// Middleware
// Logger
app.use(logger);

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// This is the old way to render HTML individually
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// Homepage Route
app.get('/', (req, res) =>
  res.render('index', {
    title: 'Members App',
    members
  })
);

// Set a static folder
app.use(express.static(path.join(__dirname, 'public')));

// members api routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on Port ${PORT}`));
