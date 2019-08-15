const express = require('express')
const users = require('./models/users')
const app = express()
const cors = require('cors')

const corsOptions = {
    origin: 'http://127.0.0.1:5500'
}
//Middleware
app.use(cors(corsOptions))

//Routes 

app.get('/users',(req, res)=>{
    res.json(users)
})

app.listen(3000,()=>console.log('Server started ...'))
