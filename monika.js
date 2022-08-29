import express from'express'
import bodyParser from 'body-parser'
import path from 'path'
import { fileURLToPath } from 'url'
import{dirname}from 'path'


//setup Express
const app=express()
const port=8080
const __fileName=fileURLToPath(import.meta.url)
const __dirName = dirname(__fileName)


console.log(import.meta.url)
console.log(__fileName)
console.log(__dirName)

//view template engine setup
app.set('views', path.join( __dirName),'views')
app.set('view engine','ejs')


//BodyParser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.get('/',(request,response)=>{
    response.render('login')
})

app.post('/login',(request,response)=>{
    const {username,password}=request.body
    if (username==='jhon'&& password==='mypassword'){
        response.status(200).send ({message:'User Logged In Successfully'})
    } else{
        response.status(401).send({message:'Username/password is incorrect'})
    }

})





app.listen(port,(error)=>{
    if (error)throw error
    console.log(`server is running at http://localhost:${port}`)
})