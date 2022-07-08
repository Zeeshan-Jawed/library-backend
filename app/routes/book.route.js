const express = require("express");
const { getBooks, addBook, getBook, updateBook } = require("../controller/book.controller");
const book_route = express.Router();
book_route.get('/getBooks', getBooks);
book_route.post('/addBook', addBook);
book_route.get('/getBook', getBook);
book_route.put('/updatebook', updateBook);

module.exports=book_route