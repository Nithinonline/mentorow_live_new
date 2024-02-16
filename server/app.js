const express = require("express")
const bodyParser = require('body-parser')
const ErrorHandler = require("./middlewares/Error");
const course = require('./routes/course')
const mentor = require('./routes/mentor')


const app = express();

app.use(express.json());
app.use(bodyParser.json())
app.use('/api/course', course)
app.use('/api/mentor', mentor)


//For Error handling
app.use(ErrorHandler)


module.exports = app





