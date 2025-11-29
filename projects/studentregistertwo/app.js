const path=require('path')
const express=require('express')
const homeRouter = require('./routes/homeRouter')
const registerRouter=require('./routes/regsiterRouter')
const rootDir=require('./utils/pathUtil')
const app=express()
app.use(express.urlencoded({ extended: true }))
app.use(homeRouter)
app.use(registerRouter)
app.use((req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','404.html'))
})
const PORT=3003
app.listen(PORT,()=>{
console.log(`Server running on http://localhost:${PORT}`)
})