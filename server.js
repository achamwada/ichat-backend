const express = require('express');
const port = process.env.PORT ||  5000;

const app = express();

// middleware
app.use(express.json({extended: false}))

app.get("/api/", (req, resp) => {
    resp.json({msg: 'Welcome to iChat backend'});
});



// Api Routes
app.use('/api/users', require('./routes/users/users'));
app.use('/api/chats', require('./routes/chats/chats'));
// app.use('/auth', require('./auth/auth'));

app.use('/api/auth', require('./routes/auth/auth'));

app.use('/api/channels', require('./routes/channels/channels'));

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
})