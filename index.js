import express  from "express";
import bodyParser from "body-parser";
import loginRouter from "./routes/login.js";
import registerUser from './routes/registerUser.js'
import DBConnect from "./configs/db.js";


const app = express()
const port = 5000

//DB
DBConnect()

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Routes
// app.use('/', router)
app.use('/login', loginRouter)
app.use('/register', registerUser)

app.listen(port, (error) => {
    if (error) throw error
    console.log(`Server is running at http://localhost:${port}`)
})