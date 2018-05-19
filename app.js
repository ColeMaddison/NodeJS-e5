'use strict';

const express = require('express');
const path = require('path');
const router = require('./routs');
const fs = require('fs');
const morgan = require('morgan');


const app = express();

// app.use(mw); -- is in routs

// logger
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'log_file.log'), {flags: 'a'})
app.use(morgan(':date | :status | :response-time ms | :user-agent', {stream: accessLogStream }));

app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server is up and running on port: ${PORT}`);
});