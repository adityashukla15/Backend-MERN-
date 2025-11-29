const express = require('express');
const app = express();
const bodyParser=require('body-parser')
// To parse POST form data
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log("First middleware executed with url", req.url, "and method", req.method);
    next();
});

app.get('/', (req, res, next) => {
    console.log("Getting page / with method", req.method);
    res.send(`
    <html>
    <head>
        <title>Student Registration</title>
        <style>
            body{
                font-family: Arial;
                background: #f2f2f2;
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }
            .container{
                background: white;
                padding: 30px;
                border-radius: 10px;
                text-align: center;
                width: 450px;
                box-shadow: 0 4px 10px rgba(0,0,0,0.2);
            }
            a{
                display: inline-block;
                margin-top: 15px;
                padding: 10px 20px;
                background: #007BFF;
                color: white;
                text-decoration: none;
                border-radius: 5px;
            }
            a:hover{
                background: #0056b3;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Welcome to Student Registration Form</h1>
            <p>Please register as soon as possible</p>
            <a href="/register">Register Here</a>
        </div>
    </body>
    </html>
    `);
});

app.get('/register', (req, res, next) => {
    console.log("Going to register page with method", req.method);
    res.send(`
    <html>
    <head>
        <title>Register</title>
        <style>
            body{
                font-family: Arial;
                background: #e6e6e6;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
            }
            .form-container{
                background: white;
                padding: 30px;
                border-radius: 10px;
                width: 450px;
                box-shadow: 0 4px 10px rgba(0,0,0,0.2);
            }
            input{
                width: 100%;
                padding: 12px;
                margin: 10px 0;
                border-radius: 5px;
                border: 1px solid #aaa;
            }
            input[type="submit"]{
                background: #28a745;
                color: white;
                cursor: pointer;
                font-size: 16px;
                border: none;
            }
            input[type="submit"]:hover{
                background: #1e7e34;
            }
        </style>
    </head>

    <body>
        <div class="form-container">
            <h1>Register</h1>
            <h3>Please enter your details</h3>
        
            <form action="/register" method="POST">
                <input type="text" name="name" placeholder="Enter your name" required />
                <input type="email" name="email" placeholder="Enter your Email" required />
                <input type="number" name="number" placeholder="Enter your Phone No" required />
                <input type="number" name="id" placeholder="Enter your Student ID" required />
                <input type="submit" value="Submit" />
            </form>
        </div>
    </body>
    </html>
    `);
});

app.use(bodyParser.urlencoded())

app.post('/register', (req, res, next) => {
    console.log("Posting request with method", req.method,req.body);
    res.send(`
    <html>
    <head>
        <style>
            body{
                font-family: Arial;
                background: #d9f7d9;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
            }
            .container{
                background: white;
                padding: 30px;
                border-radius: 10px;
                text-align: center;
                width: 450px;
                box-shadow: 0 4px 10px rgba(0,0,0,0.2);
            }
            a{
                margin-top: 20px;
                display: inline-block;
                padding: 10px 20px;
                background: #007BFF;
                color: white;
                text-decoration: none;
                border-radius: 5px;
            }
            a:hover{
                background: #0056b3;
            }
        </style>
    </head>

    <body>
        <div class="container">
            <h1>Response Submitted</h1>
            <h3>Thank you for sharing your response!</h3>
            <a href="/">Go Back To Homepage</a>
        </div>
    </body>
    </html>
    `);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
