const express=require('express');
const router=express.Router();
router.get("/",(req,res)=>{
    res.send("Fee records");
})
router.get("/:id",(req,res)=>{
    res.send(`Fee record of student ${req.params.id}`)
})
router.patch("/:id",(req,res)=>{
    const fee=req.body;
    console.log(fee)
    res.status(201).json({
        message:`fee updated for student ${req.params.id}`,
        body:fee
    })
})
module.exports=router;