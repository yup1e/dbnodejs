var express = require('express');
var connection  = require('express-myconnection'); 
var http = require('http');
var mysql = require('mysql');
var path = require('path');
//load route
var route = require('./route'); 
var app = express();
app.set('views', path.join(__dirname, 'viewstable'));
app.set('view engine', 'ejs');

app.use(
    
    connection(mysql,{
        
        host: 'localhost',
        user: 'root',
        password : '',
        port : 3306,
        database:'testonline'
    },'request')
);
app.get('/', route.list);

http.createServer(app).listen(8080);
