var express = require('express');
var router = express.Router();
var fs = require('fs');



/* GET users listing. */
router.get('/', function(req, res, next) {
     // pass the csrfToken to the view 
  res.render('newsletter',{title: 'Email form', csrftoken: req.csrfToken() })
  
});

router.post('/', function(req, res, next) {
    
    req.assert('email','A valid email is required').notEmpty().isEmail();

    var errors = req.validationErrors();
    if(errors) return res.render('error',{message: 'You must enter valid email adress!', error:errors});
    else  {
         fs.appendFile('public/subscribers.txt'," "+ req.body.email, function(err){
            if(err) throw err;
           else res.render('thankyou',{email: req.body.email, title:'submission'});
           
         })
       
    }
   
  });

module.exports = router;
