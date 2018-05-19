'use strict';

const express = require('express');
const path = require('path');
const router = express.Router();

const mw = require('./imgMiddleWare');

let htmlPath = path.join(__dirname, '/static/html/index.html');

// send files via static
// router.use(express.static(path.join(__dirname, '/static/img')));

router.use(mw);

// send index page in response
router.get('/', (req, res)=>{
    fs.createReadStream(htmlPath).pipe(res);
});

router.get('/*', (req, res) => {
    res.send('Default page. \n  Nothing to look for here');
});


module.exports = router;