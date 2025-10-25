const mongoose=require('mongoose');   // export Mongoose Here
const mongoUrl='mongodb://localhost:27017/hotels'   // connectivity and db name

mongoose.connect(mongoUrl,{  // here we connect to the mongodb
    useNewUrlParser:true,
    useUnifiedTopology:true
})

// default Connection  for connection we use for node and mongodb

const db=mongoose.connection;

db.on('connected',()=>{
    console.log('connected on Mongodb');
})
db.on('error',(err)=>{
    console.log('database Not Connected',err);
})
db.on('disconnected',()=>{
    console.log('Database Is Disconnected');
})
// exports databases
 module.exports=db;






