const express=require("express")
const router=express.Router()
router.get("/",(req,res)=>{
    res.send("Students Marks")
})
router.get("/:id",(req,res)=>{
    res.send(`Marks of student ${req.params.id}`)
})

router.post("/:id",(req,res)=>{
    const marks=req.body;
    console.log(marks)
    res.status(201).json({
        message:`Marks of student ${req.params.id} has been saved`,
        data:marks
    })
})
router.patch("/:id",(req,res)=>{
    res.send(`Marks of student with id ${req.params.id} has been updated`)
})
module.exports=router;