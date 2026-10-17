const mongoose=require('mongoose');
const markschema=new mongoose.Schema({
    name:String,
    class:Number,
    marks:Number
})
module.exports=mongoose.model("mark",markschema)