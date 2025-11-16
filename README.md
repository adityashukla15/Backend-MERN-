# Backend-MERN-

# 📘 Backend Short Notes

## 🚀 What is Backend?

* Backend is the server-side part of a web application.
* Handles database, APIs, server logic, authentication.
* In simple words: **Frontend dikhata hai, Backend chalata hai.**

---

# 🟢 Node.js

Node.js is a JavaScript runtime built on Chrome's V8 engine. It allows you to run JS outside the browser.

### ✅ Features of Node.js

* Asynchronous & Event-driven
* Single-threaded (Handles multiple tasks via event loop)
* Non-blocking I/O
* Fast due to V8 engine

### 🛠 Simple Node.js Setup

```bash
node --version
npm --version
```

### 🖨 Hello World Program

```js
console.log("Hello World");
```

Run using:

```bash
node app.js
```

---

# 📦 Modules in Node.js

Modules = Reusable pieces of code.

### Types of Modules

1. **Core Modules** (built-in)
2. **Local Modules** (your own)
3. **Third-party Modules** (npm packages)

---

## 🔹 Core Modules (Short Notes)

### 1️⃣ Path Module

```js
const path = require('path');
```

* `path.basename()` → file name
* `path.dirname()` → folder path
* `path.extname()` → extension
* `path.join()` → join paths

### 2️⃣ OS Module

```js
const os = require('os');
```

* `os.type()` → OS type
* `os.totalmem()` → RAM
* `os.freemem()` → free RAM
* `os.homedir()` → home directory

### 3️⃣ HTTP Module

```js
const http = require('http');
```

* Create server

```js
const server = http.createServer((req, res)=>{
    res.end("Hello from Server");
});
server.listen(3000);
```

---

# 📁 File System (fs) Module — **Short Notes**

```js
const fs = require('fs');
```

## ⭐ Important FS Functions (with 1-line meaning)

### 📌 Reading Files

```js
fs.readFileSync('file.txt', 'utf-8');
```

* Reads file **synchronously**.

```js
fs.readFile('file.txt', 'utf-8', (err, data)=>{});
```

* Reads file **asynchronously**.

### 📌 Creating / Writing Files

```js
fs.writeFileSync('data.txt', 'Hello');
```

* Creates or overwrites file.

```js
fs.writeFile('data.txt', 'Hello', ()=>{});
```

* Async version.

### 📌 Appending Data

```js
fs.appendFileSync('data.txt', '\nExtra line');
```

* Adds data without overwriting.

### 📌 Deleting File

```js
fs.unlinkSync('file.txt');
```

* Deletes file.

### 📌 Check File Exists

```js
fs.existsSync('data.txt');
```

* Returns **true/false**.

### 📌 Make Folder

```js
fs.mkdirSync('myFolder');
```

* Creates a folder.

### 📌 Read Folder

```js
fs.readdirSync('myFolder');
```

* Gives list of files in folder.

### 📌 Remove Folder

```js
fs.rmdirSync('myFolder');
```

* Removes empty folder.

---

# 🔧 Creating Local Modules

### 📌 math.js

```js
function add(a,b){ return a+b }
function subtract(a,b){ return a-b }
module.exports = { add, subtract };
```

### 📌 app.js

```js
const math = require('./math');
console.log(math.add(5,3));
```

---

# 📜 How `process.argv` Works (Short Note)

Used to take input from terminal.

```js
const command = process.argv[2];
console.log(command);
```

Running:

```bash
node app.js add
```

Output: `add`

---

# 🎯 Summary

* Node.js lets you run JS on server.
* Modules help organize code.
* FS module handles file operations.
* `process.argv` helps in CLI inputs.

---


# 🟢 Node.js – Backend Basics

Node.js allows JavaScript to run on the server using Chrome's V8 engine.

---

# 1️⃣ File Path Module (path)

Used to work with file and folder paths.

### Import

```js
const path = require('path');
```

### Common Functions

| Function           | Use                    |
| ------------------ | ---------------------- |
| `path.basename(p)` | Returns file name      |
| `path.dirname(p)`  | Returns directory path |
| `path.extname(p)`  | Returns file extension |
| `path.join(a,b,c)` | Joins multiple paths   |
| `path.resolve()`   | Gives absolute path    |

### Example

```js
console.log(path.basename('/home/user/app.js')); // app.js
```

---

# 2️⃣ HTTP Server in Node.js

Allows you to create a backend server.

### Import

```js
const http = require('http');
```

### Create Server

```js
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello from Node.js Server');
});

server.listen(3000, () => console.log('Server running on port 3000'));
```

### How It Works

* Client sends request
* Server receives it
* Responds using callback
* Port defines where server listens

---

# 3️⃣ DNS Module

Used for resolving domain names.

### Import

```js
const dns = require('dns');
```

### Resolve Domain → IP

```js
dns.lookup('google.com', (err, address)=>{
    console.log(address);
});
```

### Resolve All Records

```js
dns.resolve4('github.com', (err, addresses)=>{
    console.log(addresses);
});
```

---

# 4️⃣ How the Web Works (Short Notes)

### Step-by-step

1. User enters URL in browser
2. Browser sends **DNS request** → gets IP
3. Browser sends **HTTP request** to server
4. Server processes request
5. Server sends **response** (HTML/CSS/JS/data)
6. Browser renders the page

This entire process uses **protocols**.

---

# 5️⃣ Web Protocols (Important)

| Protocol | Full Form                     | Use                                    |
| -------- | ----------------------------- | -------------------------------------- |
| HTTP     | HyperText Transfer Protocol   | Communication between browser & server |
| HTTPS    | Secure HTTP                   | Encrypted communication                |
| TCP      | Transmission Control Protocol | Reliable data transfer                 |
| UDP      | User Datagram Protocol        | Fast data transfer (video/gaming)      |
| DNS      | Domain Name System            | Converts domain to IP                  |
| IP       | Internet Protocol             | Identifying devices                    |

---

# 6️⃣ Creating a Real Server (Full Example)

```js
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'index.html');

    fs.readFile(filePath, 'utf-8', (err, data) => {
        if(err){
            res.writeHead(500, {'Content-Type': 'text/plain'});
            return res.end('Server Error');
        }

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
});

server.listen(3000, () => console.log('Server running on port 3000...'));
```

### What This Does

* Creates HTTP server
* Reads HTML file
* Sends HTML as response

---

# 7️⃣ Testing the Server

### Run:

```bash
node server.js
```

Open in browser:

```
http://localhost:3000
```

---

# 🎯 Summary

* **path** → handles file paths
* **http** → creates server
* **dns** → resolves domains
* Web works using **DNS → Request → Response**
* Main protocols: **HTTP, HTTPS, TCP, UDP, DNS, IP**

---



