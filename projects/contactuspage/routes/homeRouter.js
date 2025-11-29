const path=require('path')
const express=require('express')
const rootDir=require('../utils/pathUtil')

const homeRouter=express.Router()

homeRouter.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','home.html'))
    console.log("Handling / for GET", req.url, req.method);
})
module.exports=homeRouter