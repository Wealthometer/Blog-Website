require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts')

const connectDB = require('./server/config/db')

//Connectin to DB
connectDB();

const app = express();
const PORT = 5000 || process.env.PORT;

app.use(express.static('public'))

// Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// app.get('', (req, res) => {
//     res.send(`<h1>Hello World</h1>`);
// })

app.use('/', require("./server/routes/main"));

app.listen(PORT, ()=> {
    console.log(`App Lisening on Port ${PORT}`)
})

// npm run dev . to make sure the express sever is working