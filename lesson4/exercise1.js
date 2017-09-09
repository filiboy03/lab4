const url = require('url');
const server = require('http').createServer();
const fs = require('fs');

server.on('request',(req,res)=>{
    //console.log(req.url);
    const newurl = url.parse(req.url,true);
    let path = newurl.query.url;
   // console.log(path);
    const read = fs.createReadStream('./'+path);
    read.pipe(res)
   
     }).listen(4000);
