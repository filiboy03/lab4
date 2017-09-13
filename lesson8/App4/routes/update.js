var express = require('express');
var router = express.Router();
var Mongoclient = require('mongodb');



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

  res.render('update',{title: "Update"});
});

router.post('/', function (req, res,next) {
    
     Mongoclient.connect('mongodb://127.0.0.1:27017/geodata',function(err,db){
        if(err) throw err;
        var query = {'name': req.body.finditem};
    
        var dat = {'name':req.body.name,'category':req.body.category,'location':[ req.body.longitude,req.body.latitude]};
        var options = {'upsert': true};

        db.collection('geodata').update(query,dat,options,function(err,updated){
          if(err) throw err;
          console.dir(updated);
    
          return db.close();
      });
    
        
    }); 
    
      res.render('submitted',{title: 'updated'});
    });




module.exports = router;
 

