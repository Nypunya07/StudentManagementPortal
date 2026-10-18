const mongoose=require('mongoose');
const studschema=new mongoose.Schema({
    name:String,
    age:Number,
    class:Number,
    gender:String,
    fathername:String,
    mothersname:String,
    DateofAdmission:Date,
    fee:Number,
    
})
module.exports=mongoose.model("student",studschema)