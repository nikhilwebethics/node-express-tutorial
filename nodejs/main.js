const fs = require('fs');
const http = require('http');
const crypto = require("crypto");

const start = Date.now();
const data = fs.readFileSync('./text2/dummy.text','utf-8');

const main = http.createServer();
    main.on("request",(req,res)=>{
    res.end(data);
    });

// server.on("request", (req, res) => {
//     console.log("Another request 😀");
//   });

main.listen(8000,()=>{
    console.log('start listen at port 8000')
})

crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
console.log(Date.now() - start, "Password encrypted");