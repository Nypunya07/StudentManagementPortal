const express=require("express");
const router=express.Router();
router.get("/",(req,res)=>{
    res.send("Attendance of all students");
});
router.get("/:id",(req,res)=>{
    res.send(`Attendance of student ${req.params.id}`);
});
router.post("/:id",(req,res)=>{
    const attendance=req.body;
    console.log(attendance);

    res.status(201).json({
        message: `Attendance record of student ${req.params.id} has been saved`,
        data:attendance
    });
        
});
router.patch("/:id",(req,res)=>{
    res.send(`Attendance record of student ${req.params.id} updated`);
});
module.exports=router;