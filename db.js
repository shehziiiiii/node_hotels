const mongoose=require('mongoose');   // export Mongoose Here

require('dotenv').config();
// const mongoUrl='mongodb://localhost:27017/hotels'   // connectivity and db name

// const mongoUrl = "mongodb+srv://shahzadalibaloch543_db_user:Shahzad123@cluster0.lrdv3wr.mongodb.net/test?retryWrites=true&w=majority";

// const mongoUrl=process.env.mongoDb_url;

const mongoUrl=process.env.MongoDB_url;










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






