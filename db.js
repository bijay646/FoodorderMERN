const mongoose = require('mongoose');



mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true})

var db = mongoose.connection

db.on('connected', ()=>{
    console.log('mongo DB connected')
})

db.on('error', ()=>{
    console.log('mongo DB connection failed')
})

module.exports = mongoose