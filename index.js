//import libraries - step 1
import express  from "express";
import bodyParser from "body-parser";

const app = express() // add express methods to a constant which we named app - step 2
const port = 5000 // defining the port step 3

// Starting the web server - step 4
app.listen(port, (error) => {
    if (error) throw error
    console.log(`Server is running at http://localhost:${port}`)
})

// Add Route file paths - step 5
import loginRouter from "./routes/login.js";
import registerUser from './routes/registerUser.js'

// Middleware - step 7
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Creating Routes - step 6
app.use('/login', loginRouter)
app.use('/register', registerUser)



// Import Database - Step 8
import DBConnect from "./configs/db.js";

//DB - step 9
DBConnect()





