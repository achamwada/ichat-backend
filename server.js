const express = require('express');

const app = express();

// configure port
const PORT = process.env.PORT || 5000;

// Add middleware to process json requests
app.use(express.json({ extended: false }));

// API Routes
app.use('/api/user', require('./api/routes/user/user'));
app.use('/api/friends', require('./api/routes/friend/friend'));
app.use('/api/auth', require('./api/routes/auth/login'));
app.use('/api/status', require('./api/routes/status/status'));

app.use('/api/auth', require('./routes/auth/auth'));

app.use('/api/channels', require('./routes/channels/channels'));

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
