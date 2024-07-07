
const mongoose = require("mongoose");

const mongoURL = "mongodb://127.0.0.1:27017/hotel";

mongoose.connect(mongoURL,{
    
    useUnifiedTopology : true
})

const db =mongoose.connection;

db.on('connected',()=>{
    console.log('mongodb is connected');
})

db.on('error',()=>{
    console.log('error');
})

db.on('disconnected',()=>{
    console.log('mongodb is disconnected');
})

module.exports = db;