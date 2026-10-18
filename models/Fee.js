const mongoose=require('mongoose');
const feeschema=new mongoose.Schema({
    name:String,
    date:Date,
    totalfee:Number,
    feepaid:Number,
    balance:Number
})
module.exports=mongoose.model("fee",feeschema)