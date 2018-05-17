'use strict';

const express = require('express');
const path = require('path');
const router = express.Router();
const fs = require('fs');
const mime = require('mime-types');

let htmlPath = path.join(__dirname, 'index.html');

// the image base
let imagesLinks = [
    '/the-beast.gif',
    '/the-cat.jpg',
    '/the-monster.png'
];

// send files via static
// router.use(express.static(path.join(__dirname, '/static')));

// send files via streams
router.get('/image/:img', (req, res)=>{
    let beastParam = req.params.img;
    if(imagesLinks.includes(`/${beastParam}`)){
        let beastMime = mime.contentType(path.join(__dirname, beastParam).split(';')[0]); 
        let beastStream = fs.createReadStream(path.join(__dirname, 'static', beastParam));
        res.writeHead(200, {"Content-Type": beastMime});
        beastStream.pipe(res);
    } else {
        res.send('No such image');  // error middlleware handler here!!!!!!!!!!!!!!!!!!!!!!!!
    } 
});

// send index page in response
router.get('/', (req, res)=>{
    fs.createReadStream(htmlPath).pipe(res);
});

module.exports = router;