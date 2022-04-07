
const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());
// app.use((req,res,next)=>{
//     console.log('hello this is middleware');
// });

// app.get('/',(req,res)=>{
//     res
//     .status(200)
//     .json({name:'nikhil',class:12})
//     ;
// })

// app.post('/',(req,res)=>{
//     res.send('this is post')
// })

/////////GET REQUEST ALL ITEAM///////
// const final = JSON.parse(fs.readFileSync('./dev-data/data/tours.json','utf-8'));
// app.get('/api/v/final',(req,res)=>{
// res.status(200)
// .json({last:final})
// });
const final = JSON.parse(fs.readFileSync('./dev-data/data/tours-simple.json','utf-8'));
const getsingletour = (req,res)=>{
            const id = req.params.id * 1;
            const finals = final.find(f =>f.id===id);
            res.status(200)
           .json({last:finals})
        };

const addtour = (req,res)=>{
            const newfinal = Object.assign(req.body)
            final.push(newfinal)
            fs.writeFile('./dev-data/data/tours.json',JSON.stringify(final),
            err => {
                res.status(201)
            });
            res.send(req.body)
        };
const updatetour = (req,res)=>{
         res.status(200)
         .json({status:'success',last:null})
        };


app.get('/api/v/final/:id',getsingletour);
app.delete('/api/v/final/:id',updatetour)
app.post('/api/v/final',addtour);

const port = 8000;
app.listen(port,()=>{
    console.log('app is run on the port  8000')
});
