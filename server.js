const express = require('express')
const app = express()
const connectDB = require('./model/connectDB')
const blogRouter = require('./router/blogRouter')
const bodyParer = require('body-parser')



app.use(bodyParer.json())
app.use('/api',blogRouter)

app.listen(3000, () =>{
    console.log("Run server")
})