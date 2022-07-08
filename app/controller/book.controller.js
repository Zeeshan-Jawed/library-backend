const queries = require("../config/queries")



const getBooks=async(req,res)=>{
 queries.getAll('books').then(books=>{
        res.json(books)
    })

}
const addBook=async(req,res)=>{
    
    queries.create('books',req.body).then(book => {
        res.json(book[0]);
      });
}
const getBook=async(req,res)=>{
    const{id}=req.query
    queries.getOne('books',id).then(books=>{
           res.json(books)
       })
   
   }
   const updateBook=async(req,res)=>{
    const{id}=req.query
    queries.update('books',id,req.body).then(student => {
        res.json(student[0]);
      });
}



module.exports={getBooks,addBook,getBook,updateBook}