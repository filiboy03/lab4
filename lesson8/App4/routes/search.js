var express = require('express');
var router = express.Router();
var Mongoclient = require('mongodb');
var geolocation = require('geolocation');


router.get('/', function(req, res, next) {
  res.render('search',{title:'Look up'});
});
router.post('/', function(req, res, next) {
 
    Mongoclient.connect('mongodb://127.0.0.1:27017/geodata',function(err,db){
    if(err) throw err;
    var query ={$and:[{category:req.body.category},{location:{$near:[req.body.longitude,req.body.latitude]}}]};

  db.collection('geodata').find(query).toArray(function(err, result) {
    if (err) throw err;
   
    db.close();
    res.render('index',{title:"Look up",service:result});
    });
  })});

module.exports = router;