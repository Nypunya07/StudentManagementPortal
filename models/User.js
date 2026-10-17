const mongoose=require('mongoose')
const userschema=new mongoose.Schema({
    username:{
        type:string,
        required:true,
        unique:true
    },
    password:{
        type:string,
        required:true
    }
})


//model
const User=mongoose.model('user',userschema)