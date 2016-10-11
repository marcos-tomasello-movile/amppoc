'use strict';
const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

//HTTP
app.listen(3211, function(){
    console.log("ready captain. HTTP");
});