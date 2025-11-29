const path=require('path')
const express=require('express')

const userRouter=require("./routes/userRouter")
const hostRouter=require("./routes/hostRouter")
const rootDir=require("./utils/pathUtil")
const app=express()

app.use(express.urlencoded())
app.use(userRouter)
app.use(hostRouter)

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','404.html'))
})

const PORT=3001
app.listen(PORT,()=>{
    console.log(`Server running on port http://localhost:${PORT}`)
})