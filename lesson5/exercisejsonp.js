var fetch = require('node-fetch');

var express = require('express');
var app = express();



    
    
    app.get('/users',function(req,res){
        res.jsonp();
    })
    app.listen(3000);

    fetch('http://jsonplaceholder.typicode.com/users/')
    .then(function(res){
    
        return res.json();
    }).then(function(json){
        
        console.log(json);
    });