const mongoose=require('mongoose');
const menuitemschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:['sweet','spicy','sour'],
        required:true
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingridients:{
        type:[String]
    },
    num_sales:{
        type:Number,
        default:0
    }
})

const menuitem=mongoose.model('menuitem',menuitemschema);
module.exports=menuitem;