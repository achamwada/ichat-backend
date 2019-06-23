<<<<<<< HEAD
const express = require('express');
=======
const express = require("express");
>>>>>>> 043fcc0... Users and auth

const app = express();

// configure port
const PORT = process.env.PORT || 5000;

// Add middleware to process json requests
app.use(express.json({ extended: false }));

// API Routes
app.use("/api/user", require('./routes/user/users'));

// listen on port
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
