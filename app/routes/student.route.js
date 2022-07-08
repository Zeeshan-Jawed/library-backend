const express = require("express");
const { getStudents, addStudent, getStudent, updateStudent } = require("../controller/student.controller");
const student_route = express.Router();
student_route.get('/getStudents', getStudents);
student_route.get('/getStudent', getStudent);
student_route.post('/addStudent', addStudent);
student_route.put('/updateStudent', updateStudent);

module.exports=student_route