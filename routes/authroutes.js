const express=require('express');
const router=express.Router();
const usercontroller=require('../controllers/usercontroller')
router.get("/",(req,res)=>{
    res.send("Go to signup or login page")
})
router.get("/signup",(req,res)=>{
    res.send("Signup Page")
})
router.get("/login",(req,res)=>{
    res.send("Login page")
})
router.post("/signup",usercontroller.signup)
router.post("/login",usercontroller.login)
module.exports=router