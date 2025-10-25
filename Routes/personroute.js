const express=require('express');
const router=express.Router();
const person=require('./../models/person');
const { findByIdAndUpdate } = require('../models/menuitem');


router.post('/', async (req,res)=>{
    try{
           const data=req.body;    // assuming the request body contains the assuming data

   // create a new person using the mongoose model

   const newperson=new person(data);

   //save the new person to the database

  const response= await newperson.save();
  console.log('data saved');
  res.status(200).json(response);


    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"internal server error"});
    }

})

router.get('/', async (req,res)=>{
    try{
    const data= await person.find()
    console.log('data fetched');
    res.status(200).json(data);
    }
    catch(err){
         console.log(err);
        res.status(500).json({error:"internal server error"});
    }
})


router.get('/:worktype', async (req,res)=>{
  try{
      const worktype=req.params.worktype;
    if(worktype=='chef'||worktype=="manager"|| worktype=="waiter"){
        const response=await person.find({work:worktype});  
        console.log('response fetched');
        res.status(200).json(response);
    }else{
        res.status(400).json({error:'internal server error'})
    }
  }
  catch(err){
    console.log(err);
    res.status(500).json({error:'internal server error'});
  }
})

router.put('/:id', async(req,res)=>{    // id means expecting id async means wait for database operation
    try{
        const person_id=req.params.id;  //grabbing the unique url from the person
        const updatedpersondata=req.body;// data save usally in json
        const response= await person.findByIdAndUpdate(person_id,updatedpersondata,{
            new:true,    // return the document
            runValidators:true,   // run the mongoose validation means follow the mongoose rules
        })
        if(!response){
            return res.status(404).json({error:"person not found"});
        }

        console.log('data updated');
        res.status(200).json(response);

       // return the updated document

        

    }
    catch(err){
         console.log(err);
    res.status(500).json({error:'internal server error'});
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const person_id=req.params.id;

    const response=await person.findByIdAndDelete(person_id);

      if(!response){
            return res.status(404).json({error:"person not found"});
        }
        console.log('data deleted');

        res.status(200).json({message:'person deleted'});
    }
    catch(err){
              console.log(err);
    res.status(500).json({error:'internal server error'});
    }

})

// person routes

module.exports=router;