const express=require('express')
const router=express.Router();
const studentcontroller=require('../controllers/studentcontroller')
router.get("/",(req,res)=>{
    res.send("All Students")
})
router.get("/:id",(req,res)=>{
    res.send(`Student Id:${req.params.id}`)
})
router.post("/",studentcontroller.student)
router.patch("/:id",(req,res)=>{
    res.send(`Student ${req.params.id} details updated`)
})
router.delete("/:id",(req,res)=>{
    res.send(`Student ${req.params.id} Deleted Successfully`)
})
module.exports=router;