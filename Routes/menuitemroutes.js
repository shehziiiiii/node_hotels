const express=require('express');
const router=express.Router();
const menuitem=require('./../models/menuitem');
const { route } = require('./personroute');




router.post('/',   async (req,res)=>{       // data getting
    try{
      const data=req.body;                // get data from request body
      const newmenu=new menuitem(data);     // create a new object 
      const response=await newmenu.save();  // save in the database
      console.log('data saved');            // data saved message shown
      res.status(200).json(response)         // status shown with response

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'})    // this show for any error

    }

})
router.get('/',async (req,res)=>{     // data creating
    try{
        const data= await menuitem.find();  
        console.log('data fetched');
        res.status(200).json(data);

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});

    }
})

router.put('/:id', async (req,res)=>{
    try{
        const menuitem_id=req.params.id;   // uniquely id to update the id
        const updatedmenudata=req.body;     //upadate data in json format
        const response=await menuitem.findByIdAndUpdate(menuitem_id,updatedmenudata,{   // update the menu data
            new:true,       //   return the value document
            runValidators:true,    // follow the mongoose rules
        
        })
        if(!response){
            res.status(400).json({error:'not found'})
        }
        console.log('response saved');
        res.status(200).json(response);


    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'})

    }
})

router.delete('/:id', async (req, res) => {
  try {
    const menuitem_id = req.params.id;

    // delete document
    const response = await menuitem.findByIdAndDelete(menuitem_id);

    // if not found
    if (!response) {
      return res.status(404).json({ error: 'Menu item not found' });
    }

    console.log('data deleted');
    // success response
    return res.status(200).json({ message: 'Menu item deleted successfully' });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// comment added
module.exports=router;