// Pre Buileded Modules
const express = require('express');
const app = express();
const mongo = require('mongoose');
const path = require('path');
const http = require('http');
const bodypareser = require('body-parser');
const routingConfigure = require('./routes/app.routes');
// Own Imports
let environment = require('./config/app.config.json');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

function requestType(req,res,next) {
    console.log(req.url);
    console.log(req.listen);
    next();
}

app.use(bodypareser.json());
app.use(bodypareser.urlencoded({
    extended:true
}));
app.use(requestType);

// Routing File Set for controller calling
app.use('/',routingConfigure);


// Mongo Setuping 
mongo.Promise = global.Promise;
mongo.connect(environment.dburl,{ useNewUrlParser: true },function(err) {
if(err) {
    console.error('Please Connect your database');
    console.error('start mongodb');
    
} else {
    console.log('DB IS Connected');
}
});

// base root set
app.get('/',function(req,res){
res.send('Welcome To your app');
});
// var port = process.env.PORT || 8080;
app.listen(process.env.PORT || 3000);
