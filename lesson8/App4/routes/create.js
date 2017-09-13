 var express = require('express');
var router = express.Router();
var Mongoclient = require('mongodb');

var dbConn = Mongoclient.MongoClient.connect('mongodb://localhost:27017/geodata');

/* GET users listing. */
router.get('/', function(req, res, next) {

 Mongoclient.connect('mongodb://127.0.0.1:27017/geodata',function(err,db){
    if(err) throw err;
  
    db.collection('geodata').find({},function(err,doc){
      if(err) throw err;
      console.dir(doc);

      res.render('index', { title: doc });
      db.close();
  });

}); 

  res.render('create',{title: "Location"});
});


router.post('/', function (req, res,next) {
  dbConn.then(function(db) {
    var dat = [{'name':req.body.name,'category':req.body.category,'location':[ parseFloat(req.body.longitude),parseFloat(req.body.latitude)]}];
      db.collection('geodata').insert(dat);
  });    

  var dat = [{'name':req.body.name,'category':req.body.category,'location':[ req.body.longitude,req.body.latitude]}];
  
  
  res.render('submitted',{ title:'submitted'});
});


module.exports = router;
 

