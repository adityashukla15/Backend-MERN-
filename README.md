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

# 📌 **1. Node.js Lifecycle Overview**

Node.js runs JavaScript in a **single-threaded** environment but handles tasks asynchronously using **Event Loop**.

### **Execution Lifecycle:**

1. **Start** — Node.js loads your script.
2. **Execute** — Runs code line-by-line.
3. **Register Callbacks** — async functions (setTimeout, fs, http) register callbacks.
4. **Event Loop Starts** — handles async tasks.
5. **Keeps running until** no callbacks or timers left.
6. **Exit process**.

---

# 📌 **2. Event Loop Explained (Very Simple)**

Event Loop is the machine that decides **what code runs next**.

### **Event Loop Phases:**

1. **Timers Phase** → `setTimeout`, `setInterval`
2. **Pending Callbacks Phase** → system-level callbacks
3. **Idle / Prepare Phase**
4. **Poll Phase** → waits for I/O
5. **Check Phase** → `setImmediate`
6. **Close Callbacks Phase**

### **Event Loop Flow**

```
Call Stack → Event Queue → Event Loop → Callback Executes
```

Node will **NOT exit** until:

* All timers are done
* All I/O is complete
* No pending callbacks

---

# 📌 **3. How to Exit the Event Loop**

Node automatically exits when no work is pending.

You can force exit using:

```js
process.exit();
```

Or exit with a code:

```js
process.exit(0);  // success
process.exit(1);  // error
```

---

# 📌 **4. Creating a Basic HTTP Server**

```js
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from Node Server!");
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
```

---

# 📌 **5. Understanding the Request Object (`req`)**

`req` contains all the data sent by the client.

### **Important Properties:**

* `req.url` → which page user visited
* `req.method` → GET, POST
* `req.headers` → browser details

Example:

```js
console.log(req.url);
console.log(req.method);
```

---

# 📌 **6. Sending Response (`res`)**

`res` is used to send data back to browser.

### **Basic Response:**

```js
res.writeHead(200, { "Content-Type": "text/plain" });
res.write("Hello User!");
res.end();
```

### **Sending JSON:**

```js
res.writeHead(200, { "Content-Type": "application/json" });
res.end(JSON.stringify({ message: "Hi" }));
```

---

# 📌 **7. Routing Requests**

Manually route based on `req.url`.

```js
const http = require('http');

http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Home Page");
    } else if (req.url === '/about') {
        res.end("About Page");
    } else {
        res.writeHead(404);
        res.end("Page Not Found");
    }
}).listen(3000);
```

---

# 📌 **8. Taking User Input From URL**

Using query parameters:

```
http://localhost:3000/?name=aditya
```

```js
const url = require('url');

http.createServer((req, res) => {
    const query = url.parse(req.url, true).query;

    res.end(`Hello ${query.name}`);
}).listen(3000);
```

---

# 📌 **9. Redirecting Requests**

Use **301 (permanent)** or **302 (temporary)** redirect.

```js
res.writeHead(302, { Location: '/newpage' });
res.end();
```

---

# 📌 **10. Serving an HTML Page**

Using `fs.readFile()`:

```js
const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    }
}).listen(3000);
```

---

# 📌 **11. Full Example — Event Loop + Input + Routing + HTML**

```js
const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req, res) => {
    const parsed = url.parse(req.url, true);

    if (parsed.pathname === '/') {
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    }

    else if (parsed.pathname === '/hello') {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`Hello ${parsed.query.name}`);
    }

    else if (parsed.pathname === '/go') {
        res.writeHead(302, { Location: '/' });
        res.end();
    }

    else {
        res.writeHead(404);
        res.end("Not Found");
    }

}).listen(3000);
```

---

---

# 📌 1. **What Are Streams?**

Streams are used in Node.js to **process data piece-by-piece** instead of loading the whole data in memory.

### ✔ Why Streams?

* Efficient memory usage
* Faster data processing
* Suitable for large files & continuous incoming data (video, logs)

### ✔ Types of Streams

1. **Readable Streams** → read data (fs.createReadStream)
2. **Writable Streams** → write data (fs.createWriteStream)
3. **Duplex Streams** → both read & write (net.Socket)
4. **Transform Streams** → modify data while streaming (zlib)

---

# 📌 2. **What is a Chunk?**

A “chunk” is a **small piece of data** read from a stream.

Example: Reading a 1GB file → Node reads it in small chunks (64 KB default).

### 📌 Reading Chunks Example

```js
const fs = require('fs');

const stream = fs.createReadStream('input.txt');

stream.on('data', (chunk) => {
    console.log("Received chunk:");
    console.log(chunk);
});
```

`chunk` is a **Buffer**.

---

# 📌 3. **What is a Buffer?**

A **Buffer** is temporary memory for handling binary data.
Node uses buffers when reading data piece-by-piece.

### Example of Buffer

```js
const buf = Buffer.from('Hello');
console.log(buf); // <Buffer 48 65 6c 6c 6f>
```

---

# 📌 4. **How Node Reads & Buffers Chunks**

Lifecycle of streamed data:

```
Source File → Readable Stream → Chunks → Buffer → Your Code
```

### Flow in events:

1. `data` → when new chunk arrives
2. `end` → no more data
3. `error` → file read error

---

# 📌 5. **Parsing Incoming Request Data (POST Request)**

When user submits a form, data does NOT come at once.
It arrives in **chunks**.

### Example of reading request body:

```js
let body = '';

req.on('data', (chunk) => {
    body += chunk;
});

req.on('end', () => {
    console.log("Full body: ", body);
});
```

---

# 📌 6. **Parsing Form Data**

Assume HTML form:

```html
<form action="/submit" method="POST">
  <input type="text" name="username">
  <button type="submit">Send</button>
</form>
```

### Parsing using URLSearchParams:

```js
req.on('end', () => {
    const formData = new URLSearchParams(body);
    const username = formData.get('username');

    console.log("User submitted:", username);
});
```

---

# 📌 7. **Saving User Form Data into a Text File**

```js
const fs = require('fs');
let body = '';

req.on('data', chunk => {
    body += chunk;
});

req.on('end', () => {
    const params = new URLSearchParams(body);
    const message = params.get('username');

    fs.writeFile('user.txt', message, () => {
        res.writeHead(302, { Location: '/' });
        res.end();
    });
});
```

---

# 📌 8. **Full Working Example — Stream + Chunk + Buffer + Form Save**

```js
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    if (req.url === '/' && req.method === 'GET') {
        fs.readFile('form.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }

    else if (req.url === '/submit' && req.method === 'POST') {
        let body = '';

        // Receiving chunks
        req.on('data', chunk => {
            body += chunk;
        });

        // Parsing request
        req.on('end', () => {
            const params = new URLSearchParams(body);
            const username = params.get('username');

            // Saving in file
            fs.writeFile('output.txt', username, () => {
                res.writeHead(302, { Location: '/' });
                res.end();
            });
        });
    }

});

server.listen(3000);
```

---

# 📌 9. **Key Points to Remember**

* Streams = process data in parts, not whole.
* Chunks = small pieces of binary data.
* Buffer = memory that stores chunk temporarily.
* POST data arrives in chunks → combine and parse.
* `URLSearchParams` helps extract values from form.
* Write data to file using `fs.writeFile`.

---





