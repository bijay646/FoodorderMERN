const express = require("express");
const Pizza = require('./models/pizzaModel');

const app = express();
const db= require("./db");
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("server is running" + port);
});

app.get("/getpizzas",(req,res)=>{
    Pizza.find({},(err, docs)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(docs)
        }
    })

})

const port = process.env.PORT || 8000;
app.listen(port, ()=> 'server running on port 8000');