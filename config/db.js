const mongoose=require('mongoose');
const connectdb=async()=>{
    await mongodb.connect("mongodb://localhost:27017/studentportal")
    console.log("Mongodb connected");
}
module.exports=connectdb;