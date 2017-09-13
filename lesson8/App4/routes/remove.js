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

  res.render('remove',{title: "Data"});
});


router.post('/', function (req, res,next) {
    
     Mongoclient.connect('mongodb://127.0.0.1:27017/geodata',function(err,db){
        if(err) throw err;
        var query = {'name': req.body.name};
      
        db.collection('geodata').remove(query,function(err,removed){
          if(err) throw err;
          console.dir(removed);
    
          return db.close();
      });
    
    
    
    }); 
    
      res.render('submitted',{title: 'removed'});
    });


module.exports = router;
 

