 const fs = require('fs');
 const server = require('http').createServer();

 server.on('request',(req,res)=>{
    //  fs.readFile('./streamtext/stream.text','utf-8',(error,data)=>{
    //      if(error){
    //          res.end('error-occur')
    //      }
    //        res.end(data)
    //  })
  const readable = fs.createReadStream("./streamtext/stream.text");
  readable.pipe(res);
     
 })
 server.listen(8000,()=>{
     console.log('port 8000')
 })