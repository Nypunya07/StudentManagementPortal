const stud = require('../models/Student');
const allstudents = async (req, res) => {
    try {
        const list = await stud.find();
        res.json(list);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const addstudent = async (req, res) => {
    try{
    const student = await stud.create(req.body);
    res.status(201).json({
        message: "Student added successfully",
        data: student
    });
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
};
const findstudent= async (req,res)=>{
    try{
        const filters=req.query;
        if (filters.age){
            filters.age=Number(filters.age);
        }if(filters.class){
            filters.class=Numbers(filters.class);
        }
        const filtered= await stud.find(filters);
        res.status(200).json(filtered);
    }catch(error){
        res.status(500).json({message:error.message});
    }

}
const Student = require('../models/Student');

const updatestudent = async (req, res) => {
    try {
        const { name, ...updates } = req.body;

        const student = await stud.findOneAndUpdate(
            { name: name },
            { $set: updates },
            { new: true, runValidators: true }
        );

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json({
            message: "Student updated successfully",
            data: student
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports = {
    allstudents,
    addstudent,
    findstudent,
    updatestudent, 
};
