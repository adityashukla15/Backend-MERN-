const http=require('http')//using module http for creating server
const server=http.createServer((req,res)=>{//.createserver is a function whch gives a callback in form of req res
    console.log(req)//this will console the req in termial every details
})
const PORT=3001//port is like door in computer where we can run a page
server.listen(PORT,()=>{//when we create a server we need something that can listen the req thats why we create this
    console.log(`Server running on PORT https//:localhost:${PORT}`)//will show in our terminal with a message
})