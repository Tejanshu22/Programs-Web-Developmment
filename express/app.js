const exp = require("constants");
const express = require("express");
const fs = require("fs");
const { Agent } = require("http");
const path = require("path")
const port = 80;
const app = express();



app.use("/static", express.static("static"));
app.use(express.urlencoded())




app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    const con="this is best content";
    const params={'title':'pug is best','content':con}
    res.status(200).render('index.pug',params)
})
app.post('/',(req,res)=>{
    name=req.body.name
    age =req.body.age
    gender =req.body.gender
    address =req.body.address
    more =req.body.more
    let outputToWrite=`the name of the client is${name},${age} years old,${gender},residing at${address},more about ${more}`
    fs.writeFileSync('output.txt',outputToWrite)
    const params={'message':'Your form has been successfully subbmitted'}
    res.status(200).render('index.pug',params)
})


app.listen(port,()=>{
    console.log(`This started successfully ${port} `);
})