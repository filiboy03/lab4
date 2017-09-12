var express = require('express');
var router = express.Router();
var Mongoclient = require('mongodb').MongoClient;
var crypto = require('crypto');
const decipher = crypto.createDecipher('aes256', 'asaadsaad');



/* GET home page. */
router.get('/', function(req, res, next) {

  Mongoclient.connect('mongodb://127.0.0.1:27017/homework7',function(err,db){
    if(err) throw err;
  
    db.collection('homework7').findOne({},function(err,doc){
      if(err) throw err;
      console.dir(doc);

      const encrypted = doc.message;
      let decrypted = decipher.update(encrypted, 'hex', 'utf8');
      decrypted += decipher.final('utf8');
      console.log(decrypted);

      res.render('index', { title: decrypted });
      db.close();
  });



});
 
});

module.exports = router;
