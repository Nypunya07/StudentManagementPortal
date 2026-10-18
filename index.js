const express = require("express");
const app = express();
const connectdb=require("./config/db");
connectdb();

const studentroutes = require("./routes/studentroutes");
const attendanceroutes=require("./routes/attendanceroutes");
const marksroutes = require("./routes/marksroutes");
const feeroutes=require("./routes/feeroutes");
const userroutes=require("./routes/authroutes")

app.use(express.json());

app.use("/students", studentroutes);
app.use("/attendance", attendanceroutes);
app.use("/marks",marksroutes);
app.use("/fee",feeroutes);
app.use('/',userroutes);

app.listen(3000,()=>{
    console.log("Server running on port 3000");
})