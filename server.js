const express = require('express');
const port = process.env.PORT ||  5000;

const app = express();

// middleware
app.use(express.json({extended: false}))

app.get("/api/", (req, resp) => {
    resp.json({msg: 'Welcome to iChat backend'});
});



// Api Routes
app.use('/api/users', require('./users/users'));
app.use('/api/chats', require('./chats/chats'));

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
})