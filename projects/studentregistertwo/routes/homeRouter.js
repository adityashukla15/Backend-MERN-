const path=require('path')
const express=require('express')
const homeRouter=express.Router()
const rootDir=require('../utils/pathUtil')
homeRouter.get('/',(req,res,next)=>{
    console.log("Getting home page with url ",req.url,"and method",req.method)
    res.sendFile(path.join(rootDir,'views','home.html'))
    
})
module.exports=homeRouter
