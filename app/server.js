const express = require('express');
const bodyParser = require('body-parser');
const student_route = require('./routes/student.route');
const book_route = require('./routes/book.route');
var cors = require('cors')
const app = express();
app.use(cors({
    origin: ['http://localhost:3000']
}));
app.use(express.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    parameterLimit: 100000,
    extended: true
}));
const port=process.env.PORT||8003
app.use('/api',[student_route,book_route])
app.listen(port, () => {
    console.log(`server is start ${port}`)
})