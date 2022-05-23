const express = require('express')
const dotenv =  require('dotenv').config()
const mongoose = require('mongoose')
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api',require('./routes/coursesRoutes'))
app.use('/user',require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, ()=> console.log(`Server is on port: ${port}`))