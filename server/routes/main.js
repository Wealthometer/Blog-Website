const express = require('express');
const router = express.Router();

//Routes

router.get('', (req, res) => {
    // How to render or pass ejs data
    const locals = {
        title: "Nodejs Blog",
        description: "Simple Blog Created"
    }


    res.render('index')
})

router.get('/about', (req, res) => {
    res.render('about')
})

module.exports = router;