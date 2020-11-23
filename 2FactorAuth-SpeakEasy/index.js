const express = require('express');
const speakeasy = require('speakeasy');
const uuid = require('uuid');
const { JsonDB } = require('node-json-db');
const { Config } = require('node-json-db/dist/lib/JsonDBConfig');
const app = express();

// Create server
app.get('/api', (req, res) =>
  res.json({ message: 'Welcome to the two factor authentication example' })
);

// Middleware
app.use(express.json());

// Init server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Init DB
const db = new JsonDB(new Config('myDatabase', true, false, '/'));

// Get all the users
app.get('/api/users', (req, res) => {
  const users = db.getData('/user');
  res.json(users);
});
// Get all the users
app.get('/api/body', (req, res) => {
  res.json(req.body.userId);
});

// Register user & create temp secret
app.post('/api/register', (req, res) => {
  // Create ID for user
  const id = uuid.v4();
  try {
    const path = `/user/${id}`;
    const temp_secret = speakeasy.generateSecret();
    db.push(path, { id, temp_secret });
    res.json({ id, secret: temp_secret.base32 });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error generating secret' });
  }
});

// Verify token and make secret perm
app.post('/api/verify', (req, res) => {
  const { token, userId } = req.body;
  try {
    const path = `/user/${userId}`;
    const user = db.getData(path);

    const { base32: secret } = user.temp_secret;

    const verified = speakeasy.totp.verify({
      secret,
      encoding: 'base32',
      token,
    });

    if (verified) {
      db.push(path, { id: userId, secret: user.temp_secret });
      res.json({ verified: true });
    } else {
      res.json({ verified: false });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error finding user' });
  }
});

// Validate token
app.post('/api/validate', (req, res) => {
  const { token, userId } = req.body;
  try {
    const path = `/user/${userId}`;
    const user = db.getData(path);

    const { base32: secret } = user.secret;

    const tokenValidates = speakeasy.totp.verify({
      secret,
      encoding: 'base32',
      token,
      window: 1,
    });

    if (tokenValidates) {
      res.json({ validated: true });
    } else {
      res.json({ validated: false });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error finding user' });
  }
});
