const express = require("express");
const app = express();

const studentroutes = require("./routes/studentroutes");
console.log(typeof studentroutes);
const attendanceroutes=require("./routes/attendanceroutes");
console.log(typeof attendanceroutes);
const marksroutes = require("./routes/marksroutes");
console.log(typeof marksroutes);
const feeroutes=require("./routes/feeroutes");

app.use(express.json());

app.use("/students", studentroutes);
app.use("/attendance", attendanceroutes);
app.use("/marks",marksroutes);
app.use("/fee",feeroutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});