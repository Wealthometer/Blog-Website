require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts')

const app = express();
const PORT = 5000 || process.env.PORT;

// Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.get('', (req, res) => {
    res.send("Hello World");
})

app.listen(PORT, ()=> {
    console.log(`App Lisening on Port ${PORT}`)
})

// npm run dev . to make sure the express sever is working