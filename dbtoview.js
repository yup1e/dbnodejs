var express = require('express');
var connection  = require('express-myconnection'); 
var http = require('http');
var mysql = require('mysql');
var path = require('path');
var bodyParser = require('body-parser');

//load route
var route = require('./route'); 
var app = express();

app.set('views', path.join(__dirname, 'viewstable'));
app.set('view engine', 'ejs');
app.set('customvar','content of custom var');

app.use(
    
    connection(mysql,{
        
        host: 'localhost',
        user: 'root',
        password : '',
        port : 3306,
        database:'testonline'
    },'request')
);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('/', route.list);
app.get('/edit/:id',route.edit);
app.post('/save_edit/:id',route.save);
app.get('/delete/:id',route.delete);

http.createServer(app).listen(8080);
