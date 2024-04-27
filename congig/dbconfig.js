//mongodb connection

const mongoose = require('mongoose');
const connect = mongoose.connect("")
const connection=mongoose.connection;
connection.on('connected',()=>{
    console.log('MongoDB database connection established successfully');
})
connection.on('error',(err)=>{
    console.log('MongoDB database connection error:',err);
})

module.exports =mongoose