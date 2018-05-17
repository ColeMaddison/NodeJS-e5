'use strict';

const express = require('express');
const path = require('path');
const router = express.Router();
const fs = require('fs');

let htmlPath = path.join(__dirname, 'index.html');

router.get('/', (req, res)=>{
    fs.createReadStream(htmlPath).pipe(res);
});

module.exports = router;