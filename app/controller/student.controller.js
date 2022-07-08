const queries = require("../config/queries")



const getStudents=async(req,res)=>{
 queries.getAll('students').then(students=>{
        res.json(students)
    })

}
const getStudent=async(req,res)=>{
    const{id}=req.query
    queries.getOne('students',id).then(students=>{
           res.json(students)
       })
   
   }
const addStudent=async(req,res)=>{
    
    queries.create('students',req.body).then(student => {
        res.json(student[0]);
      });
}
const updateStudent=async(req,res)=>{
    const{id}=req.query
    queries.update('students',id,req.body).then(student => {
        res.json(student[0]);
      });
}



module.exports={getStudents,addStudent,getStudent,updateStudent}