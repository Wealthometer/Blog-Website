const express = require('express');
const router = express.Router();

//Routes

router.get('', (req, res) => {
    // How to render or pass ejs data
    const locals = {
        title: "Nodejs Blog Web Page",
        description: "Simple Blog web page Created with Node.js, MongoDb adn Express"
    }


    res.render('index', { locals })
})

router.get('/about', (req, res) => {
    res.render('about')
})

router.get('/contact', (req, res) => {
    res.render('contact')
})


module.exports = router;