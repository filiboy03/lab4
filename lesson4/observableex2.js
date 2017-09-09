const os1 = require('os');
const Rx = require('@reactivex/rxjs');

var checkSystem =new Promise(function(resolve,reject){
    setTimeout(function() {
        if(os1.totalmem>=2e9 && os1.cpus.length >=2){
            resolve('System is checked successfully!');
        }
        else reject(os1.cpus.length < 2 ? 'Processor is not supported!' : 'This app needs at least 2GB of Ram!');
    }, 1000);
       
    });


Rx.Observable.fromPromise(checkSystem)
             .subscribe(e => console.log(e), err => console.error(err));
             

             console.log('Checking your system...');