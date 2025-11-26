const {temphandler}=require("./convert")

const requestHandler=(req,res)=>{
   console.log(req.url,req.method) 
   if(req.url==="/"){
    res.setHeader("Content-Type",'text/html')
    res.write(`<html>
        <title>"Temprature Convertor"</title>
        <body>
        <h1>"Temprature Convertor"</h1>
        <a href="/temprature">Go To Temprature Convertor</a>
        </body>
        </html>
        `)
         return res.end()
   }
  
   else if(req.url.toLowerCase()==="/temprature"){
    res.setHeader('Content-Type','text/html')
    res.write(`
        <html>
        <title>Convertor</title>
        <body>
        <h1>Enter temprature in the form</h1>
        <form action="covert-temprature method="POST">
        <input type="text" placeholder="Enter temprature in Celcius name="first"/>
        <input type="submit" value="Convert">
        </form>
        </body>
        </html>`)
        return res.end()
   }
   
   else if(req.url.toLowerCase()==="/calculate-result" && req.method=='POST'){
    return temphandler(req,res)
   }
    res.setHeader('Content-Type', 'text/html');
  res.write(`
    <html>
      <head><title>Practise Set</title></head>
      <body>
        <h1>404 Page Does not Exist</h1>
        <a href="/">Go To Home</a>
      </body>  
    <html>  
  `);    
  return res.end();
}
exports.requestHandler = requestHandler;