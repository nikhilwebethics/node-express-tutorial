const fs = require('fs');
const http  = require('http');
const url  = require('url');

// //Blocking Synchronous
// const datafile = fs.readFileSync('./text/data.text','utf-8');
// const newfile = `this is new file${datafile},\n${Date()} `;
// fs.writeFileSync('./text/newfile.text',newfile)

// //Non-blocking Asynchronous
// fs.readFile('./text/nonblock.text','utf-8', (error,data)=>{
// console.log(data)
// })
////////////////////////////////////////////////////////////////
//SERVER
const template = fs.readFileSync('./templates/overview.html','utf-8');
const product = fs.readFileSync('./data/data.json','utf-8');
const finaldata = JSON.parse(product)

const data = http.createServer((req,res)=>{

    const pathname = req.url;

    if(pathname ==='/' || pathname ==='/template'){
    res.end(template)
    } 
    else if(pathname === '/api'){

            res.writeHead(200,{'content-type':'application/json'})
            res.end(product)
        
    }
    else{
        res.writeHead(400,{'content-type':'text/html'})
        res.end('<h1> page not found </h1>')
    }
})
data.listen(8000,()=>{
    console.log('start listen at port 8000')
})