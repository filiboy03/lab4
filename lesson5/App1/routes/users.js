var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
//var rxnew = require('@reactivex/rxjs');

const fetchpromise = fetch('http://jsonplaceholder.typicode.com/users/');     



 // for Using async/await
/* const fetchpromise = function() {
      return fetch('http://jsonplaceholder.typicode.com/users/');     
}; */

/* GET users listing. */
router.get('/', function(req, res, next) {
  fetchpromise.then(data => data.json()).then(msg => res.render('users',{title: msg})); //using promise


  // using Observable
       /*  rxnew.Observable.fromPromise(fetchpromise)    
              .map(e=> e.json())
              .subscribe(msg => res.render('users',{title: msg})); */
              
              
  // Using async/await
          /*     async function fetching(){
                try{        
                  let d = await fetchpromise();
                  console.log(d.json().toString());
                  let x = d.json();
                  
                  res.render('users',{title: x});
                } 
                catch(e){
                  console.log(e);
                
              }
            }
 fetching(); */
                 

});


module.exports = router;

