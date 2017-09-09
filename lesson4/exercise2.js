const os1 = require('os');

var checkSystem = function (){
    return new Promise(function(resolve,reject){
        if(os1.totalmem>=2e9 && os1.cpus.length >=2){
            resolve('System is checked successfully!');
        }
        else reject(os1.cpus.length < 2 ? 'Processor is not supported!' : 'This app needs at least 2GB of Ram!');
    })
};

checkSystem()
    .then(e=>console.log(e))
    .catch(err=>console.error(err));

console.log('Checking your system...');

