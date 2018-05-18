'use strict';

const express = require('express');
const router = require('./routs');
const mw = require('./imgMiddleWare');

const app = express();

app.use(mw);
app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server is up and running on port: ${PORT}`);
});