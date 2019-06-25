const express = require("express");

const app = express();

// configure port
const PORT = process.env.PORT || 5000;

// Add middleware to process json requests
app.use(express.json({ extended: false }));

// API Routes
app.use("/api/user", require('./routes/user/user'));
app.use("/api/friends", require('./routes/friend/friend'));
app.use("/api/auth", require("./routes/auth/login"));

// listen on port
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
