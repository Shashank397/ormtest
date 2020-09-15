const express = require('express')
const student = require('./models/student')

var app = express()

app.get('/getdata', (req, res) => student.findAll().then(result => {
    console.log(result)
    res.send(result)
    res.sendStatus(200)
}).catch(err => console.log(err)))

app.listen(9000, ()=>{
    console.log("server is running")
})
