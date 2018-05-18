'use strict';

const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const mime = require('mime-types');

// 404 html
let htmlErr = path.join(__dirname, 'static/html/404.html');


// the image base
let imagesLinks = [
    '/the-beast.gif',
    '/the-cat.jpg',
    '/the-monster.png'
];

// send files via streams
app.use('/image/:img', (req, res)=>{
    let beastParam = req.params.img;
    if(imagesLinks.includes(`/${beastParam}`)){
        let beastMime = mime.contentType(path.join(__dirname, beastParam).split(';')[0]); 
        let beastStream = fs.createReadStream(path.join(__dirname, 'static/img', beastParam));
        res.writeHead(200, {"Content-Type": beastMime});
        beastStream.pipe(res);
    } else {
        next(new Error('Image not found'));
    }
});

app.use((err, req, res, next) => {
    res.status(404);
    fs.createReadStream(htmlErr).pipe(res);
});

module.exports = app;