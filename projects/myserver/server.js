const http=require('http')
const fs=require('fs')
const path=require('path')

const server=http.createServer((req,res)=>{
    let filePath=""
    if(req.url==="/") filePath="index.html"
    else if(req.url==="/about") filePath="about.html"
    else if(req.url==="/contact") filePath="contact.html"
    else filePath = "404.html";
    const fullPath=path.join(__dirname,"pages",filePath)
    fs.readFile(fullPath,"utf-8",(err,data)=>{
        if(err){
            res.writeHead(404,{"Content-Type": "text/html"})
            return res.end("<h1>Page not found</h1>")
        }
    res.writeHead(200,{"Content-Type": "text/html"})
    res.end(data)
    })
})

server.listen(3001,()=>{
    console.log("Server running at http://localhost:3001");
})