const express=require('express')
const path=require('path')
const app=express()
const registerRouter=express.Router()
const rootDir=require('../utils/pathUtil')
registerRouter.get('/register',(req,res,next)=>{
   
    console.log("Getting regsister page with url",req.url,"and method",req.method)
    res.sendFile(path.join(rootDir,'views','register.html'))
})
registerRouter.post('/register',(req,res,next)=>{
     console.log(req.body)
    console.log("Request submiited with url",req.url,"and method",req.method)
    res.sendFile(path.join(rootDir,'views','resgister-sucess.html'))
})
module.exports=registerRouter