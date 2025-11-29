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
# 🟦 Node.js Event-Driven Architecture & Event Loop

## 📘 1. What is Event-Driven Architecture in Node.js?

Node.js follows an **event-driven architecture**, meaning:

* Code executes based on **events and callbacks**.
* Instead of waiting for tasks, Node.js **registers callbacks** and continues execution.
* Asynchronous tasks (file read, network calls) run via **libuv threadpool**.

**Simple Definition:**
Node.js handles tasks by listening for events and executing the assigned callback when the event is triggered.

---

## 📘 2. Node.js — Single Threaded Architecture

Node.js executes JavaScript on **one thread** (single-threaded) using:

* **V8 Engine** → runs JS.
* **libuv** → handles async operations.

### ⚡ Key Point:

✔ Single-threaded **JavaScript execution**
✔ Multi-threaded **async operations** via libuv

---

## 📘 3. V8 vs libuv (Difference)

| Component     | Purpose                  | Handles                         |
| ------------- | ------------------------ | ------------------------------- |
| **V8 Engine** | Executes JavaScript code | Sync code, callbacks execution  |
| **libuv**     | Manages async tasks      | FS, Network, Timers, Threadpool |

**Simple Words:**

* V8 = Brain of JS
* libuv = Worker team (background tasks)

---

## 📘 4. Node.js Runtime Internals

Node runtime = V8 + libuv + C++ bindings + APIs

It manages:

* Event loop
* Threadpool
* Callback queue
* Microtask queue
* Timers

---

# 🟦 Event Loop — The Heart of Node.js

## 📘 5. What is the Event Loop?

The **event loop** allows Node.js to handle:

* Non-blocking I/O
* Async operations
* Callbacks execution

While JavaScript is single-threaded, the event loop makes Node.js act **asynchronously**.

---

## 📘 6. Event Loop Phases (Simplified)

```
┌──────────────────────┐
│ 1. Timers (setTimeout)│
├──────────────────────┤
│ 2. Pending Callbacks  │
├──────────────────────┤
│ 3. Idle, Prepare      │
├──────────────────────┤
│ 4. Poll (I/O events)  │
├──────────────────────┤
│ 5. Check (setImmediate)│
├──────────────────────┤
│ 6. Close Callbacks    │
└──────────────────────┘
```

### Microtasks Queue (Highest Priority):

* Promises (`.then`, `catch`)
* `process.nextTick()`

Executed **after each phase**.

---

## 📘 7. Priority Order Chart

```
process.nextTick()  → Highest Priority
Microtasks (Promises)
Timers → setTimeout, setInterval
I/O callbacks
Check → setImmediate
Close callbacks
```

---

# 🟦 8. How Async Code Works Internally (Full Cycle)

Below is the **exact flow** of a non-blocking async operation:

```
JS Code → V8 Engine executes →
Async task given to libuv →
libuv handles I/O / threadpool →
Callback returned to Event Loop →
Event Loop executes callback through V8
```

### Detailed Step-by-Step:

1. JavaScript code starts executing in **V8**.
2. If async task occurs (`fs.readFile`, `setTimeout`):

   * Sent to **libuv** threadpool or timers.
3. libuv completes the task.
4. Callback is pushed into event loop queues.
5. Event loop picks the callback according to phase.
6. Callback executed back inside **V8 engine**.

---

# 🟦 9. Blocking vs Non-Blocking Code

## ✔ Blocking Code

Stops execution until task completes.
Example:

```cpp
const data = fs.readFileSync("file.txt");
```

## ✔ Non-Blocking Code

Allows event loop to continue.

```cpp
fs.readFile("file.txt", (err, data) => {
    console.log(data);
});
```

### Why Avoid Blocking Code?

* Blocks the event loop
* Reduces performance
* Makes server unresponsive

---

# 🟦 10. How Normal Functions & Async Callbacks Execute

### ✔ Normal Functions

* Run immediately in **V8**
* Added to call stack
* Completed before moving on

### ✔ Async Callbacks

* Offloaded to **libuv**
* Returned when ready
* Executed through event loop

---

# 🟦 11. Visual Diagram — Callbacks Flow

```
           Async Task
        (fs / http / timer)
                ↓
         Sent to libuv
                ↓
         Completed by OS
                ↓
   Callback pushed to Event Loop
                ↓
     V8 executes callback finally
```

---

# 🟦 12. Routing Requests (Quick Note)

Node.js handles different routes using:

```js
if(req.url === "/home")
```

Event loop ensures multiple requests don’t block each other.

---

# 🟦 13. Final Summary 

```
Node.js is event-driven and single-threaded.
V8 executes JS; libuv handles async work.
Event loop has phases → timers, I/O, check, close.
Microtasks run before every phase.
Async tasks go to libuv and return to event loop.
Blocking code blocks event loop → avoid it.
Normal functions execute in V8; callbacks return from event loop.
```

----
# 📘 Express.js 

## 🚀 What is Express.js?

**Express.js** is a fast, minimalist, and flexible **Node.js web framework** used to build backend applications and APIs easily.

### **Definition:**

> Express.js is a lightweight web application framework for Node.js that simplifies handling requests, responses, routing, middleware, and server creation.

---

## ❓ Why Do We Need Express.js?

### Without Express → Node.js is low-level

* Manual request handling
* Complex routing
* Hard to manage middlewares
* Repetitive boilerplate

### With Express → Super easy

* Simple routing
* Built-in middleware support
* Easy to send responses
* Scalable structure

---

# ⚙️ Installing Express.js

### Step 1: Create project folder

```
mkdir myapp
cd myapp
```

### Step 2: Initialize Node project

```
npm init -y
```

### Step 3: Install Express

```
npm install express
```

---

# 💡 Creating Your First Express Server

```js
const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Server Running at 3000");
});
```

---

# 🧱 What is Middleware in Express.js?

Middleware = Function that runs **before** the final route handler.

### Syntax:

```js
app.use((req, res, next) => {
    console.log("Middleware executed");
    next();
});
```

### **Working:**

```
Request → Middleware → Route → Response
```

---

# 📤 Sending Responses in Express

### 1️⃣ Send text

```js
res.send("Hello World");
```

### 2️⃣ Send HTML

```js
res.send("<h1>Welcome</h1>");
```

### 3️⃣ Send JSON

```js
res.json({ message: "Success" });
```

### 4️⃣ Set status code

```js
res.status(404).send("Page Not Found");
```

---

# 🔀 Routing in Express.js (The Heart of Express)

Routing → Defines how your server responds to various URLs.

## 📌 GET Request

Used to fetch data.

```js
app.get('/', (req, res) => {
    res.send("GET Request Received");
});
```

---

## 📌 POST Request

Used to send data to server.

```js
app.post('/submit', (req, res) => {
    res.send("POST Data Submitted");
});
```

---

## 📌 PUT Request

Used to update existing data.

```js
app.put('/update', (req, res) => {
    res.send("PUT Request: Data Updated");
});
```

---

## 📌 DELETE Request

Used to delete data.

```js
app.delete('/delete', (req, res) => {
    res.send("Data Deleted");
});
```

---

## 📌 Universal Middleware - `.use()`

Runs for every route.

```js
app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
});
```

---

# 🌐 Express Deep Dive – How It Works Internally

### Flow of Request → Response:

```
User Request
       ↓
Middleware (can modify req/res)
       ↓
Route Handler (get/post/use)
       ↓
Response sent to client
```

### Layout:

```
app.use()    → runs always
app.get()    → runs for GET
app.post()   → runs for POST
app.all()    → runs for all methods
```

---

# 🏗 Handling Multiple Routes

```js
app.get('/home', (req, res) => {
    res.send("Home Page");
});

app.get('/about', (req, res) => {
    res.send("About Page");
});
```

---

# ✨ Taking User Input (Query Params)

```js
app.get('/search', (req, res) => {
    const q = req.query.q;
    res.send(`You searched for ${q}`);
});
```

URL Example:

```
/search?q=express
```

---

# 📑 Taking User Input (URL Params)

```js
app.get('/user/:id', (req, res) => {
    res.send(`User ID is ${req.params.id}`);
});
```

---

# 📝 Taking Form Input in Express

To read POST form data:

### Step 1: Enable body parser

```js
app.use(express.urlencoded({ extended: true }));
```

### Step 2: Handle form

```js
app.post('/register', (req, res) => {
    const { username } = req.body;
    res.send(`Welcome ${username}`);
});
```

---

# 🔁 Redirecting a Request

```js
app.get('/google', (req, res) => {
    res.redirect('https://google.com');
});
```

---

# 🎯 Final Summary

```
Express.js = Fast Node.js framework.
Middleware = Pre-processing function.
GET = Fetch data.
POST = Send data.
PUT = Update data.
DELETE = Remove data.
.use() = Runs for all methods.
Routing = Different URLs → Different responses.
Form Handling = express.urlencoded().
Redirect = res.redirect().
```

---
# 📘 Express.js – Complete README Style Notes

## 🚀 What is Express.js?

**Express.js** is a fast, minimalist, and flexible **Node.js web framework** used to build backend applications and APIs easily.

### **Definition:**

> Express.js is a lightweight web application framework for Node.js that simplifies handling requests, responses, routing, middleware, and server creation.

---

## ❓ Why Do We Need Express.js?

### Without Express → Node.js is low-level

* Manual request handling
* Complex routing
* Hard to manage middlewares
* Repetitive boilerplate

### With Express → Super easy

* Simple routing
* Built-in middleware support
* Easy to send responses
* Scalable structure

---

# ⚙️ Installing Express.js

### Step 1: Create project folder

```
mkdir myapp
cd myapp
```

### Step 2: Initialize Node project

```
npm init -y
```

### Step 3: Install Express

```
npm install express
```

---

# 💡 Creating Your First Express Server

```js
const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Server Running at 3000");
});
```

---

# 🧱 What is Middleware in Express.js?

Middleware = Function that runs **before** the final route handler.

### Syntax:

```js
app.use((req, res, next) => {
    console.log("Middleware executed");
    next();
});
```

### **Working:**

```
Request → Middleware → Route → Response
```

---

# 📤 Sending Responses in Express

### 1️⃣ Send text

```js
res.send("Hello World");
```

### 2️⃣ Send HTML

```js
res.send("<h1>Welcome</h1>");
```

### 3️⃣ Send JSON

```js
res.json({ message: "Success" });
```

### 4️⃣ Set status code

```js
res.status(404).send("Page Not Found");
```

---

# 🔀 Routing in Express.js (The Heart of Express)

Routing → Defines how your server responds to various URLs.

## 📌 GET Request

Used to fetch data.

```js
app.get('/', (req, res) => {
    res.send("GET Request Received");
});
```

---

## 📌 POST Request

Used to send data to server.

```js
app.post('/submit', (req, res) => {
    res.send("POST Data Submitted");
});
```

---

## 📌 PUT Request

Used to update existing data.

```js
app.put('/update', (req, res) => {
    res.send("PUT Request: Data Updated");
});
```

---

## 📌 DELETE Request

Used to delete data.

```js
app.delete('/delete', (req, res) => {
    res.send("Data Deleted");
});
```

---

## 📌 Universal Middleware - `.use()`

Runs for every route.

```js
app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
});
```

---

# 🌐 Express Deep Dive – How It Works Internally

### Flow of Request → Response:

```
User Request
       ↓
Middleware (can modify req/res)
       ↓
Route Handler (get/post/use)
       ↓
Response sent to client
```

### Layout:

```
app.use()    → runs always
app.get()    → runs for GET
app.post()   → runs for POST
app.all()    → runs for all methods
```

---

# 🏗 Handling Multiple Routes

```js
app.get('/home', (req, res) => {
    res.send("Home Page");
});

app.get('/about', (req, res) => {
    res.send("About Page");
});
```

---

# ✨ Taking User Input (Query Params)

```js
app.get('/search', (req, res) => {
    const q = req.query.q;
    res.send(`You searched for ${q}`);
});
```

URL Example:

```
/search?q=express
```

---

# 📑 Taking User Input (URL Params)

```js
app.get('/user/:id', (req, res) => {
    res.send(`User ID is ${req.params.id}`);
});
```

---

# 📝 Taking Form Input in Express

To read POST form data:

### Step 1: Enable body parser

```js
app.use(express.urlencoded({ extended: true }));
```

### Step 2: Handle form

```js
app.post('/register', (req, res) => {
    const { username } = req.body;
    res.send(`Welcome ${username}`);
});
```

---

# 🔁 Redirecting a Request

```js
app.get('/google', (req, res) => {
    res.redirect('https://google.com');
});
```

---

# 🎯 Final Summary

```
Express.js = Fast Node.js framework.
Middleware = Pre-processing function.
GET = Fetch data.
POST = Send data.
PUT = Update data.
DELETE = Remove data.
.use() = Runs for all methods.
Routing = Different URLs → Different responses.
Form Handling = express.urlencoded().
Redirect = res.redirect().
```

---


# 📦 Parsing Requests in Express.js

## 🔹 1. What is Body Parsing?

Body parsing means reading **form data**, **JSON**, or **URL-encoded data** sent by the client.

Express provides built-in middleware for this.

---

## 📝 Using `express.urlencoded()`

Used to parse **HTML form data**.

### Syntax:

```js
app.use(express.urlencoded({ extended: true }));
```

### Execution Flow:

```
Form Submit → urlencoded() → req.body → Route Handler
```

### Example:

```js
app.post('/submit', (req, res) => {
    const { username, email } = req.body;
    res.send(`User: ${username}, Email: ${email}`);
});
```

---

## 📝 Using `express.json()`

Used to parse **JSON data**.

```js
app.use(express.json());
```

---

# 🚏 Express Router (Modular Routing)

Express Router helps split routes into multiple files.

## Why Router?

✔ Clean folder structure
✔ Separation of concerns
✔ Maintainable large-scale apps

---

## 📄 Creating a Router

### Step 1: Create route file `routes/shop.js`

```js
const express = require('express');
const router = express.Router();

router.get('/products', (req, res) => {
    res.send('Product List');
});

module.exports = router;
```

### Step 2: Use router in main `app.js`

```js
const shopRoutes = require('./routes/shop');
app.use(shopRoutes);
```

---

# ❌ Adding a 404 Error Page

Used when no route matches.

```js
app.use((req, res) => {
    res.status(404).send('<h1>Page Not Found</h1>');
});
```

Execution order:

```
Routes → If no match → 404 middleware
```

---

# 🛣 Common Paths & Route Groups

Use a base path for all routes:

```js
app.use('/admin', adminRoutes);
```

Meaning:

```
/admin/add-product
/admin/products
```

---

# 🗂 Adding HTML Files in View Folder

Folder structure:

```
project/
 └─ views/
     ├─ index.html
     ├─ about.html
```

Use `res.sendFile()` to send HTML file.

---

# 📁 Serving HTML Using Path Utility (pathUtil)

To avoid long relative paths `"../../"`, Node provides `path` + a helper.

## Step 1: Create helper `util/path.js`

```js
const path = require('path');
module.exports = path.dirname(require.main.filename);
```

## Step 2: Use it in routes

```js
const path = require('path');
const rootDir = require('../util/path');

router.get('/', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'index.html'));
});
```

---

# 📄 Example Express Project Structure

```
project/
 ├─ app.js
 ├─ routes/
 │   ├─ admin.js
 │   └─ shop.js
 ├─ views/
 │   ├─ index.html
 │   ├─ 404.html
 ├─ util/
 │   └─ path.js
 └─ node_modules/
```

---

# 🎯 Final Summary

```
express.urlencoded() → Parses form data
express.json() → Parses JSON data
Router → Organizes routes in separate files
404 Page → Handled with last middleware
sendFile() → Serves HTML files
pathUtil → Helps create absolute paths
```

Bhai bolo next Express topic kya sikhna hai?🔥







