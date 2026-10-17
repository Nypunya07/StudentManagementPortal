const student=(req,res)=>{
    const student = req.body;
    console.log(student);
    res.status(201).json({
        message: "Student added successfully",
        data: student
})
}
module.exports={
    student
}